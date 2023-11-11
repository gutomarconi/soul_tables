// import React, { ReactNode } from 'react';
// import { TooltipStyled, HelpStyled, TitleStyled, TextStyled, Wrapper } from './HelpBubble.styled';

// export interface IHelpBubbleProps {
//   title?: ReactNode;
//   text?: ReactNode;
//   placement?: "top" | "left" | "right" | "bottom" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start";
//   children: ReactNode;
//   inlineBlock?: boolean;
//   removePadding?: boolean;
//   pointerColor?: string;
//   removePointerEvents?: boolean;
// }

// export const HelpBubble: React.FC<IHelpBubbleProps> = ({
//   title,
//   text,
//   children,
//   placement = 'top',
//   inlineBlock= false,
//   removePadding = false,
//   pointerColor,
//   removePointerEvents = true
// }) => {
//   const isTextString = typeof text === 'string';

//   return (
//     <TooltipStyled
//       pointerColor={pointerColor}
//       title={text ? (
//         <HelpStyled data-testid='help_bubble' removePointerEvents={removePointerEvents} removePadding={removePadding}>
//           {!!title && <TitleStyled>{title}</TitleStyled>}
//           {!!text && (
//             <TextStyled hasTitle={!!title}>
//               {text}
//             </TextStyled>
//           )}
//         </HelpStyled>
//       ) : ''}
//       removeCursorEvents={removePointerEvents}
//       placement={placement}
//       arrow={!!text}
//       data-testid="tooltip"
//       isString={isTextString}
//     >
//       <Wrapper inlineBlock={inlineBlock || false}>{children}</Wrapper>
//     </TooltipStyled>
//   );
// };
