import type * as React from "react";
import { useState, useEffect, useRef, useCallback, useMemo, forwardRef } from "react";
import CardBase, { type CardBaseRef, type Props as CardBaseProps, type Mode as CardMode } from "../card-base/card-base";
import ErrorContent, { type Props as ErrorContentProps } from "../error-content/error-content";
import RephraseContent, { type Props as RephraseContentProps } from "../rephrase-content/rephrase-content";
import ScrollableArea from "../scrollable-area/scrollable-area";
import { EditorCardContextProvider } from "./context";
import LTReact, { Div, Span } from "../../index";
import { useBaseCardContext } from "../card-base/hooks";

export type NavigationDirection = "previous" | "next";

interface FooterProps {
	mode: CardMode;
	userCanNavigate: boolean;
	onNavigateError: (direction: NavigationDirection) => void;
	onNavigateSentence: (direction: NavigationDirection) => void;
}

type ContentPropsMap = { paraphrase: RephraseContentProps; correct: ErrorContentProps };

export type UsePropsByModeFn<R = void> = <T extends CardMode>(
	previousMode: CardMode | undefined,
	mode: T,
	props: T extends keyof ContentPropsMap ? ContentPropsMap[T] : never
) => R;

type RetrieveUpdateContentFn = (fn: UsePropsByModeFn) => void;

export type Props = CardBaseProps &
	Omit<FooterProps, "mode" | "userCanNavigate"> & {
		initialContentProps: RephraseContentProps | ErrorContentProps;
		forwardUpdateContentFn: RetrieveUpdateContentFn;
	};

const useGetContent: UsePropsByModeFn<React.ReactElement | null> = (previousMode, mode, props) => {
	const getComponent = useCallback(() => {
		if (props === null) {
			return null;
		}

		if (mode === "paraphrase" && "paraphrasingsData" in props) {
			if (previousMode === "correct" && props.synonymsData) {
				props.synonymsData.wordIsErroneous = true;
			}

			return <RephraseContent {...props} />;
		} else if (mode === "correct" && "fixes" in props) {
			return <ErrorContent {...props} />;
		} else {
			throw new Error(`Invalid card mode "${mode}" passed in`);
		}
	}, [previousMode, mode, props]);
	const [currentContent, setCurrentContent] = useState<React.ReactElement | null>(getComponent());

	useEffect(() => {
		setCurrentContent(getComponent());
	}, [getComponent]);

	return currentContent;
};

const Footer: React.FC<FooterProps> = ({ mode, userCanNavigate, onNavigateError, onNavigateSentence }) => {
	const { isDetached, adjustPosition } = useBaseCardContext();
	const previousIsDetached = useRef<boolean | null>(null);
	const togglePrevious = useCallback(() => {
		switch (mode) {
			case "correct":
				onNavigateError("previous");
				break;
			case "paraphrase":
				onNavigateSentence("previous");
				break;
			default:
				throw new Error(`Unknown mode "${mode}"`);
		}
	}, [mode, onNavigateError, onNavigateSentence]);
	const toggleNext = useCallback(() => {
		switch (mode) {
			case "correct":
				onNavigateError("next");
				break;
			case "paraphrase":
				onNavigateSentence("next");
				break;
			default:
				throw new Error(`Unknown mode "${mode}"`);
		}
	}, [mode, onNavigateError, onNavigateSentence]);

	useEffect(() => {
		if (previousIsDetached.current === false && isDetached === true) {
			// Card got detached. Adjust position to componsate
			// for the appearing card navigation...
			adjustPosition();
		}

		previousIsDetached.current = isDetached;
	}, [isDetached, adjustPosition]);

	if (!isDetached || !userCanNavigate) {
		return null;
	}

	return (
		<Div className="lt-comp-editor-base__footer">
			<>
				<Div
					className="lt-comp-editor-base__footer__btn lt-comp-editor-base__footer__btn--prev"
					onClick={togglePrevious}
				>
					<Span className="lt-comp-editor-base__footer__icon lt-icon__arrow_left--blue" />
				</Div>
				<Div
					className="lt-comp-editor-base__footer__btn lt-comp-editor-base__footer__btn--next"
					onClick={toggleNext}
				>
					<LTReact.Tr name="editorCardNextSuggestion" />
					<Span className="lt-comp-editor-base__footer__icon lt-icon__arrow_right--blue" />
				</Div>
			</>
		</Div>
	);
};

const EditorCard = forwardRef<CardBaseRef, Props>(function EditorCard(
	{ initialContentProps, mode, root, forwardUpdateContentFn, ...cardBaseProps },
	cardBaseRef
) {
	const [contentProps, setContentProps] = useState<ErrorContentProps | RephraseContentProps>(initialContentProps);
	const [previousMode, setPreviousMode] = useState<CardMode | undefined>();
	const [currentMode, setCurrentMode] = useState<CardMode>(mode);
	const { current: updateContent } = useRef<UsePropsByModeFn>((previousMode, mode, props) => {
		setPreviousMode(previousMode);
		setCurrentMode(mode);
		setContentProps(props);
	});
	const content = useGetContent(previousMode, currentMode, contentProps);
	const userCanNavigate = useMemo(() => {
		if ("displayedErrors" in contentProps) {
			return contentProps.displayedErrors.length > 1;
		}

		if ("sentenceRanges" in contentProps) {
			return Number(contentProps.sentenceRanges?.length) > 1;
		}

		return false;
	}, [contentProps]);

	useEffect(() => {
		forwardUpdateContentFn(updateContent);
	}, [forwardUpdateContentFn, updateContent]);

	return (
		<EditorCardContextProvider value={{ disablePremiumTeaser: cardBaseProps.disablePremiumTeaser }}>
			<CardBase {...cardBaseProps} mode={currentMode} ref={cardBaseRef} root={root}>
				<ScrollableArea scrollerClassName="lt-comp-editor-card__content">{content}</ScrollableArea>
				<Footer
					mode={currentMode}
					userCanNavigate={userCanNavigate}
					onNavigateError={cardBaseProps.onNavigateError}
					onNavigateSentence={cardBaseProps.onNavigateSentence}
				/>
			</CardBase>
		</EditorCardContextProvider>
	);
});

export default EditorCard;
