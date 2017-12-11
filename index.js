#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const cwd = process.cwd()
const child_process = require('child_process')

const templatePath = path.resolve(__dirname, './templates')
const packagePath = path.resolve(cwd, 'package.json')

// 如果 package.json 不存在则直接生成
let basename = path.basename(cwd)
let pkg = fs.existsSync(packagePath) ? JSON.parse(fs.readFileSync(packagePath, 'utf-8')) : {
  'name': basename,
  'version': '1.0.0',
  'description': '',
  'main': 'index.js',
  'author': '',
}

// 配置 sh
if(Array.isArray(pkg['pre-commit']) && !pkg['pre-commit'].includes('eslint')) {
  pkg['pre-commit'].push('eslint')
} else {
  pkg['pre-commit'] = ['eslint']
}

pkg.scripts = Object.assign({}, pkg.scripts, {
  'eslint': './node_modules/.bin/eslint **/*.js'
})

fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2), 'utf-8')

// 配置 .eslintrc.js  .eslintignore
// 目前不考虑包括子文件夹的情况
fs.readdirSync(templatePath).forEach(filename => {
  fs.writeFileSync(path.resolve(cwd, filename), fs.readFileSync(path.resolve(templatePath, filename), 'utf-8'), 'utf-8')
})

console.log('配置完成，开始安装相关依赖')

// 安装依赖
// 配置依赖 eslint eslint-config-qyy-mp pre-commit
let devDependencies = [
  'eslint@^4.13.0',
  'https://github.com/IBOS-team/eslint-config-qyy-mp.git',
  'pre-commit@^1.2.2'
]

let argv = 'install -D ' + devDependencies.join(' ')

try {
  child_process.exec('cnpm ' + argv)
} catch(e) {
  console.log(e)
  child_process.exec('chdir ' + cwd + '; npm ' + argv)
}