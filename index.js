/**
 * Plugin factory
 *
 * @param {string} pkgName - NPM package name
 * @returns {class}
 */
async function factory (pkgName) {
  const me = this

  /**
   * DoboRestproxyNdut class
   *
   * @class
   */
  class DoboRestproxyNdut extends this.app.pluginClass.base {
    static alias = 'dbrpxndut'
    static dependencies = ['dobo', 'dobo-restproxy']

    constructor () {
      super(pkgName, me.app)
      this.config = {}
    }
  }

  return DoboRestproxyNdut
}

export default factory
