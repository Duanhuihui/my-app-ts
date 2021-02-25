import React from 'react'

export default class SignIn extends React.Component<any,any>{
    componentDidMount() {
        // console.log('window.AMap', window.AMap);
        const map = new AMap.Map('container', {
          // zoom:11,//级别
          // center: [116.4,39.92],
          resizeEnable: true
          // viewMode:'3D'//使用3D视图
        });
    
        map.clearMap();  // 清除地图覆盖物
    
        // 创建一个 Icon
        var carIcon = new AMap.Icon({
          // 图标尺寸
          size: new AMap.Size(35, 35),
          // 图标的取图地址
          // 图标所用图片大小
          imageSize: new AMap.Size(35, 35),
          // 图标取图偏移量
          imageOffset: new AMap.Pixel(0, 0)
        });
    
        var markers = [{
          icon: carIcon,
          position: [116.397428, 39.90923]
        }, {
          icon: carIcon,
          position: [116.368904, 39.913423]
        }, {
          icon: carIcon,
          position: [116.305467, 39.807761]
        }];
    
        // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
        markers.forEach(function(marker) {
          new AMap.Marker({
            map: map,
            icon: marker.icon,
            position: [marker.position[0], marker.position[1]],
            // 以 icon 的 [center bottom] 为原点
            offset: new AMap.Pixel(-13, -30)
          });
        });
    
        map.setFitView();
      }
    
    render(){
        return<>
            <div id="container"></div>
    </>}
    
}