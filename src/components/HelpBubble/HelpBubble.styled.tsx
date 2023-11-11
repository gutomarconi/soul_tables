// import React  from 'react';
// import styled, { css } from 'styled-components';
// import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

// export const TooltipStyled = styled((props: TooltipProps & { isString?: boolean, removeCursorEvents?: boolean, pointerColor?: string }) => {
//   const { onClose, children, isString, ...tooltipProps } = props;

//   return (
//     <Tooltip classes={{ popper: props.className }} {...tooltipProps}>
//       {children}
//     </Tooltip>
//   );
// })`
//   & .MuiTooltip-tooltip {
//     box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.backgrounds.main};
//     font-size: 0.875rem;
//     line-height: 16px;
//     font-family: ${({ theme }) => theme.fonts.family.primary};
//     font-weight: normal;
//     font-style: normal;
//     max-width: 440px;
//     padding: 0;
//     margin-bottom: 9px !important;
//     border-radius: 4px;
//     pointer-events: initial !important;
    
//     ${({ removeCursorEvents }) => removeCursorEvents && css`
//       pointer-events: none !important;
//     `}
//   }
//   & .MuiTooltip-arrow {
//     color: ${({ pointerColor, theme }) => pointerColor || theme.colors.backgrounds.textOn} !important;
//     pointer-events: none;
//     margin-top: -0.66rem;

//     :before {
//       box-shadow: 1px 1px 2px rgb(0 0 0 / 15%);
//     }
//   }
// `;

// export const HelpStyled = styled.div<{ removePadding?: boolean, removePointerEvents?: boolean }>`
//   background: ${({ theme }) => theme.colors.backgrounds.textOn};
//   box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
//   border-radius: 4px;
//   overflow-wrap: anywhere;
  
//   ${({ removePointerEvents }) => removePointerEvents && css`
//     pointer-events: none;
//   `}
  
//   ${({ removePadding }) => !removePadding && css`
//     padding: 12px;
//   `}
// `;

// export const TitleStyled = styled.span`
//   font-family: ${({ theme }) => theme.fonts.family.primary};
//   line-height: 21px;
//   margin-bottom: 4px;
//   font-weight: 500;
//   color: ${({ theme }) => theme.colors.text.primary};
//   font-size: 14px;
// `;

// export const TextStyled = styled(TitleStyled)<{ hasTitle?: boolean }>`
//   font-weight: 400;
//   color: ${({ hasTitle, theme }) => hasTitle ? theme.colors.text.secondary : theme.colors.text.primary};
//   margin-bottom: 0;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
// `;

// export const TooltipStyledV2 = styled.div<{ position: [number, number]}>`
//   position: fixed;
//   color: ${({ theme }) => theme.colors.brand.secondary};
//   left: ${({ position }) => position[0]}px;
//   top: ${({ position }) => position[1]}px;
//   background: white;
//   padding: 4px 8px;
//   box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
//   font-weight: 500;
//   opacity: 0;
//   pointer-events: none;
//   transition: opacity 0.3s ease-in-out;
//   border-radius: 3px;
// `;

// export const Trigger = styled.span`
//   position: relative;
  
//   &:hover {
//     ${TooltipStyledV2} {
//       opacity: 1;
//     }
//   }
// `;

// export const Wrapper = styled.span<{ inlineBlock?: boolean }>`
//   ${({ inlineBlock }) => inlineBlock && css`
//     display: inline-block;
//   `}
// `;

// export const ShowPreview = styled.button`
//   font-family: ${({ theme }) => theme.fonts.family.primary};
//   appearance: none;
//   background: none;
//   padding: 0;
//   margin: 0;
//   border: none;
//   font-weight: 600;
//   cursor: pointer;
// `;

// export const PreviewModalWrapper = styled.div`
//   padding: 1.5rem;
//   flex-grow: 1;
//   max-width: calc(90vw - 200px);
// `;

// export const PreviewTextWrapper = styled.div`
//   max-height: calc(100vh - 400px);
//   overflow: auto;
// `;
