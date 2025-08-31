async function factory (pkgName) {
  const me = this

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
