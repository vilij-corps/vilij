import type { Lexicon, Plugin, matchOptions, Match, Net } from './misc'
import type View from './view/three'

/** parse a given text */
declare function nlp<PluginTypes = {}>(text: string, lexicon?: Lexicon): View & PluginTypes

// Constructor
declare module nlp {
  /** interpret text without tagging */
  export function tokenize(text: string, lexicon?: Lexicon): View
  /** scan through text with minimal analysis */
  export function lazy(text: string, match?: string): View
  /** mix in a compromise-plugin */
  export function plugin(plugin: Plugin): any
  /** mix-in a compromise plugin */
  export function extend(plugin: Plugin): any
  /** turn a match-string into json */
  export function parseMatch(match: string, opts?: matchOptions): object[]
  /** grab library internals */
  export function world(): object
  /** grab library metadata */
  export function model(): object
  /** grab exposed library methods */
  export function methods(): object
  /** which compute functions run automatically */
  export function hooks(): string[]
  /**  log our decision-making for debugging */
  export function verbose(toLog?: boolean | string): any
  /**  current semver version of the library */
  export const version: string
  /** connect new tags to tagset graph */
  export function addTags(tags: object): any
  /** add new words to internal lexicon */
  export function addWords(words: Lexicon): any
  /** turn a list of words into a searchable graph */
  export function buildTrie(words: string[]): object
  /** compile a set of match objects to a more optimized form */
  export function buildNet(matches: Match[]): Net
  /** add words to the autoFill dictionary */
  export function typeahead(words: Lexicon): any
  /** export library for extending with plugins */
  export interface TypedPlugin<Methods extends object> extends Plugin { methods: Methods }
}

export default nlp
