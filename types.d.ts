declare module '*.json' {
  const value: any
  export default value
}

// vue-module.d.ts
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
