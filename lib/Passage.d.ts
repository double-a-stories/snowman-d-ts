declare let passage: Passage;

declare class Passage {
  constructor(id: any, name: any, tags: any, source: any);
  /** The numeric ID of the passage. */
  readonly id: number;
  /** The name of the passage. */
  name: string;
  /** The tags of the passage. */
  tags: string[];
  /** The passage source code. */
  source: string;

  /**
   * Returns an HTML-rendered version of this passage’s source.
   *
   * If a param is provided, renders that instead of passage source.
   */
  render(source?: string): string;
}
