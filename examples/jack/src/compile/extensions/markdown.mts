/**
 * @file Extensions - markdown
 * @module examples/jack/compile/extensions/markdown
 */

import type {
  Buffer,
  Closer,
  Extension,
  Opener
} from '@flex-development/mark/ast'
import * as md from '@flex-development/mdast-util-from-markdown'
import {
  blockquote,
  code,
  definition,
  emphasis,
  hardBreak,
  heading,
  html,
  image,
  inlineCode,
  link,
  list,
  listItem,
  paragraph,
  strong,
  thematicBreak
} from '@flex-development/mdast-util-from-markdown/creators'
import {
  enterdata,
  enterlistitemvalue,
  enterlistordered,
  enterreference,
  exitatxheadingsequence,
  exitautolinkemail,
  exitautolinkprotocol,
  exitcharacterreference,
  exitcharacterreferencemarker,
  exitcharacterreferencevalue,
  exitcodefenced,
  exitcodefencedfence,
  exitcodefencedfenceinfo,
  exitcodefencedfencemeta,
  exitcodeindented,
  exitcodetext,
  exitdata,
  exitdefinitiondestinationstring,
  exitdefinitionlabelstring,
  exitdefinitiontitlestring,
  exithardbreak,
  exithtml,
  exitimage,
  exitlabel,
  exitlabeltext,
  exitlink,
  exitreferencestring,
  exitresource,
  exitresourcedestinationstring,
  exitresourcetitlestring,
  exitsetextheading,
  exitsetextheadinglinesequence,
  exitsetextheadingtext
} from '@flex-development/mdast-util-from-markdown/handles'

export default markdown

/**
 * Create the markdown AST extension.
 *
 * @this {void}
 *
 * @param {Opener} opener
 *  Create an `enter` event handler
 * @param {Closer} closer
 *  Create an `exit` event handler
 * @param {Buffer} buffer
 *  Start capturing output into a `fragment`
 * @return {Extension}
 *  The markdown extension
 */
function markdown(
  this: void,
  opener: Opener,
  closer: Closer,
  buffer: Buffer
): Extension {
  return {
    canContainEols: [],
    enter: {
      atxHeading: opener(heading),
      autolink: opener(link),
      autolinkEmail: enterdata,
      autolinkProtocol: enterdata,
      blockQuote: opener(blockquote),
      characterReference: enterdata,
      codeFenced: opener(code),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeFlowValue: enterdata,
      codeIndented: opener(code, buffer),
      codeText: opener(inlineCode, buffer),
      codeTextData: enterdata,
      data: enterdata,
      definition: opener(definition),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis),
      hardBreakEscape: opener(hardBreak),
      hardBreakTrailing: opener(hardBreak),
      htmlFlow: opener(html, buffer),
      htmlFlowData: enterdata,
      htmlText: opener(html, buffer),
      htmlTextData: enterdata,
      image: opener(image),
      label: buffer,
      link: opener(link),
      listItem: opener(listItem),
      listItemValue: enterlistitemvalue,
      listOrdered: opener(list, enterlistordered),
      listUnordered: opener(list),
      paragraph: opener(paragraph),
      reference: enterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading),
      strong: opener(strong),
      thematicBreak: opener(thematicBreak)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: exitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: exitautolinkemail,
      autolinkProtocol: exitautolinkprotocol,
      blockQuote: closer(),
      characterReference: exitcharacterreference,
      characterReferenceMarkerHexadecimal: exitcharacterreferencemarker,
      characterReferenceMarkerNumeric: exitcharacterreferencemarker,
      characterReferenceValue: exitcharacterreferencevalue,
      codeFenced: closer(exitcodefenced),
      codeFencedFence: exitcodefencedfence,
      codeFencedFenceInfo: exitcodefencedfenceinfo,
      codeFencedFenceMeta: exitcodefencedfencemeta,
      codeFlowValue: exitdata,
      codeIndented: closer(exitcodeindented),
      codeText: closer(exitcodetext),
      codeTextData: exitdata,
      data: exitdata,
      definition: closer(),
      definitionDestinationString: exitdefinitiondestinationstring,
      definitionLabelString: exitdefinitionlabelstring,
      definitionTitleString: exitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(exithardbreak),
      hardBreakTrailing: closer(exithardbreak),
      htmlFlow: closer(exithtml),
      htmlFlowData: exitdata,
      htmlText: closer(exithtml),
      htmlTextData: exitdata,
      image: closer(exitimage),
      label: exitlabel,
      labelText: exitlabeltext,
      link: closer(exitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: exitreferencestring,
      resource: exitresource,
      resourceDestinationString: exitresourcedestinationstring,
      resourceTitleString: exitresourcetitlestring,
      setextHeading: closer(exitsetextheading),
      setextHeadingLineSequence: exitsetextheadinglinesequence,
      setextHeadingText: exitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    },
    preprocess: [md.preprocess]
  }
}
