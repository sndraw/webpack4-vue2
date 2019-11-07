# webpack使用说明

#### 1.如无node，安装node
#### 2.进入目录，安装package.json中的依赖包
```
npm install -S
```
```
npm install -D
```
#### 3.根据需要构建项目
build（生产，打包目录dist）
```
npm run build
```

dev（开发，打包目录dev）
```
npm run dev
```

hot（开发-热模块替换，打包目录dev）
```
npm run hot
```

##### 开发环境访问路径：
>http://localhost:8080

#### 4.mock 模拟

##### 开发模式
>自动引入dev.conf.js

```
const config = {
  mock: true,//开发环境可开启mock，api请求指向mock数据（默认指向src/mock文件夹）
  apiUrl: "//localhost:8081",
  uploadUrl: "//localhost:8085",
  defaultImgUrl: "//localhost:8085/data/default.jpg",
  urlsEnum: {
    site: '/site'
  }
  ...
}
export  default config
```


##### 生产模式
>自动引入prod.conf.js

```
const Config = {
    mock: false,//生产环境关闭mock
    vue: {
        devtools: false
    },
    //http请求时，进行url地址拼接，如 Config.apiUrl+Config.urlsEnum.rank
    apiUrl: ('https:' == document.location.protocol ? 'https:' : 'http:') + "//www.github.com",
    urlsEnum: {
        site: '/site'
    }
    ...
};
export  default config
```
