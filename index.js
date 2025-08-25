async function factory (pkgName) {
  const me = this

  class DoboRestproxyNdut extends this.lib.Plugin {
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
