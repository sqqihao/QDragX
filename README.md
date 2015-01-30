QDragX
======

横向拖拽组件

1：引用 css和js

<link rel="stylesheet" type="text/css" href="style/DragX.css" />
<script src="js/DragX.js"></script>


html结构为：
```
  <div class="score_parent">
      <div class="score">最小0</div>
      <div class="slider">
          <div class="slider-line"></div>
          <div class="slider-control"></div>
      </div>
      <div class="score">最大20</div>
  </div> 
```  
  
  //JAVASCRIPT运行一下
```
  $.sliderX(".slider", {
      onDrag: function() {
          var val = parseInt(this.getPercent() / 100 * 20);
          console.log(val)
      },
      //当你设置值的时候会触发的事件;
      triggerSetValue : function(val) {
          console.log("你要手动数字值了:")
          console.log(val);
      }
  });
```
  
  //more
  1:提供了设置值的接口,
    值为百分比:
```
    $(".slider[value]").each(function(i, e) {
        e.drag.setValue(2/10);
    });
```
    
    
  2://提供了disable的接口, 设置以后这个元素就不能拖拽哇;
```
    $(".slider.disable").each(function(i, e){
        e.drag.disabledDrag();
    });
```
