/** The ID or name of a passage */
type PassageID = string | number;

/**
 * Picks and returns a random entry from its arguments.
 *
 * It will also combine the values of any arrays passed to it together and
 * return a random entry from the total set.
 */
declare var either: <T>(...a: (T | T[])[]) => T;
/**
 * Returns whether or not a passage has been visited.
 *
 * If multiple passages are given, returns whether all of them have been
 * visited.
 */
declare var hasVisited: (...p: PassageID[]) => boolean;
/**
 * Returns the number of times a passage has been visited.
 *
 * If multiple passages are given, returns the smallest number.
 */
declare var visited: (p: PassageID) => number;
/**
 * Accepts a valid jQuery selector and the ID or name of a passage. If both
 * exist in the story, it will render the contents of the passage and overwrite
 * the HTML of any elements matching the selector provided.
 */
declare var renderToSelector: (selector: any, passage: PassageID) => void;

/**
 * The global function window.getStyles() accepts one or more URLs of remote CSS
 * stylesheets and attempts to load them. The function returns a Promise. If
 * loading is successful, all remote CSS rules are applied as new <style>
 * elements to the <head> section of the story.
 */
declare var getStyles: (urls: string[]) => Promise<any>;
