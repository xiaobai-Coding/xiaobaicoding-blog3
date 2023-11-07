module.exports = {
  title: '小白Coding日志',
  description: '这里是小白Coding日志,会以轻松简单的方式,通过分享编程学习日常,帮助大家一步步掌握编程技能!',
  themeConfig: {
    logo: 'https://www.linglan01.cn/favicon.JPG',
    //顶部导航栏
    nav: [
      {text: '掘金', link: 'https://juejin.cn/user/515006730085735'},
      {text: 'Github', link: 'https://github.com/it1998-web'},
    ],
    sidebar: [
      {
        title: '学习',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/introduce/01.md',
          '/introduce/03.md',
        ]
      },
    ]
}
}