const { resolve } = require('node:path')
const { rollup } = require('rollup')
const typescript = require('@rollup/plugin-typescript')

async function build(inputOptions, outputOptions) {
  try {
    const bundle = await rollup(inputOptions)
    await bundle.write(outputOptions)
  } catch(e) {
    throw e
  }
}

const inputOptions = {
  input:resolve(__dirname, '../commands/index.ts'),
  plugins:[
    typescript()
  ]
}

const outputOptions = [
  {
    file:resolve(__dirname, '../dist/index.js'),
    format:'cjs'
  },
  {
    file:resolve(__dirname, '../dist/index.mjs'),
    format:'esm'
  }
]

async function startBuild() {
  for(const outputOption of outputOptions) {
    await build(inputOptions, outputOption)
  }
}

startBuild()
