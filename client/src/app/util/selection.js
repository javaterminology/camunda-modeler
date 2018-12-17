export default class Selection {
  /**
   *
   * @param {Window} windowObject
   */
  constructor(windowObject) {
    this.window = windowObject;
  }

  getSelection() {
    return this.window.getSelection().toString();
  }
}
