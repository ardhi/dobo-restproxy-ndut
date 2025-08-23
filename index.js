async function factory (pkgName) {
  const me = this

  return class DoboRestproxyNdut extends this.lib.Plugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'dbrpxndut'
      this.dependencies = ['dobo', 'dobo-restproxy']
      this.config = {}
    }
  }
}

export default factory
