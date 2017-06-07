## table
- table可设置width、height、border、padding、margin值
- 宽高默认由内容撑开，如果设置了宽度，宽度默认被里面的td平分，如果给某个td设置宽度，剩下来宽度由其他td平分
- 给table设置的高度只起到min-height作用，内容超过设置高度，table的高度会被撑高

## table-row(tr)
- 给tr设置的高度只起到min-height作用，内容超过设置高度，tr的高度会被撑高
- tr中的td默认高度继承tr高度，若给其中一个td设置高度，其他td也会变高，多列等高布局
- 无法设置宽度，margin值


## table-cell(td)
- **若table不存在，宽高不能为百分比**
- 继承table高度，平分宽度
- **给td设置vertical-align: middle;除了float，absolute所有block，inline元素都会相对于td垂直居中**
- **给td设置text-align: center;除了float，absolute所有inline元素水平居中，block元素不居中但他的内容或子inline元素居中**
