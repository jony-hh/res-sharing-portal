<script setup lang="ts"></script>

<template>
  <div class="news">
    <div class="d-flex justify-lg-space-between my-2 mx-10">
      <div>资讯要闻</div>
      <div>查看更多 ></div>
    </div>
    <div class="d-flex justify-lg-space-around">
      <div style="height: 200px">
        <div class="box">
          <a
            target="_blank"
            title="拥抱美好的2024"
            href="/focus_news/detail/9210"
          >
            <span class="txt" style="width: 360px">拥抱美好的2024</span>
            <div class="img" style="height: 200px">
              <img
                style="height: 200px; width: 360px; object-fit: cover"
                src="https://wj008.xhsz.tisapi.com/upfiles/1704163353389.png"
                alt=""
              />
            </div>
          </a>
        </div>
        <div style="display: flex">
          <div class="box">
            <a
              target="_blank"
              title="“新年列车”的守岁人"
              href="/focus_news/detail/9211"
            >
              <span class="txt" style="width: 180px">“新年列车”的守岁人</span>
              <div class="img">
                <img
                  style="height: 100px; width: 180px; object-fit: cover"
                  src="https://wj008.xhsz.tisapi.com/upfiles/1704163386998.png"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div class="box">
            <a
              target="_blank"
              title="公益微视频 | 新·声"
              href="/focus_news/detail/9212"
            >
              <span style="width: 180px" class="txt">公益微视频 | 新·声</span>
              <div class="img">
                <img
                  style="height: 100px; width: 180px; object-fit: cover"
                  src="https://wj008.xhsz.tisapi.com/upfiles/1704163421182.png"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div style="width: 420px">
        <div class="item">
          <div class="tit">
            <a
              target="_blank"
              title="新华全媒+｜一滴墨里的“创新路”"
              href="/focus_news/detail/9205"
            >
              新华全媒+｜一滴墨里的“创新路”
            </a>
          </div>
        </div>

        <div class="item">
          <div class="tit">
            <a
              target="_blank"
              title="积石山6.2级地震｜新年·新愿·新家"
              href="/focus_news/detail/9206"
            >
              积石山6.2级地震｜新年·新愿·新家
            </a>
          </div>
        </div>

        <div class="item">
          <div class="tit">
            <a
              target="_blank"
              title="新华全媒+｜心之所系 行之所向——爱国主义教育法实施首日见闻"
              href="/focus_news/detail/9207"
            >
              新华全媒+｜心之所系 行之所向——爱国主义教育法实施首日见闻
            </a>
          </div>
        </div>

        <div class="item">
          <div class="tit">
            <a
              target="_blank"
              title="深圳职业技术大学“同备一堂大中小学劳动教育课”跨校集体教研活动成功举办"
              href="/focus_news/detail/9208"
            >
              深圳职业技术大学“同备一堂大中小学劳动教育课”跨校集体教研活动成功举办
            </a>
          </div>
        </div>

        <div class="item">
          <div class="tit">
            <a
              target="_blank"
              title="山东大学举办第一届大学生文科实践创新大赛"
              href="/focus_news/detail/9209"
            >
              山东大学举办第一届大学生文科实践创新大赛
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news {
  width: 960px;
}

.box {
  position: relative;
}

.txt {
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  font-size: 13px;
  color: #fff;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  padding: 0 10px;
  bottom: 0;
  z-index: 20;
}

.item .tit {
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 15px 20px;
  a {
    text-decoration: none;
    color: #333;
    margin-left: 20px;
    font-family:
      PingFang SC,
      '微软雅黑',
      Arial,
      Helvetica Neue,
      Helvetica,
      Tahoma,
      sans-serif;
  }
  a:hover {
    color: #f88b00;
  }
  a:before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    font-size: 0;
    line-height: 0;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -2.5px;
    background: #ccc;
  }
}
</style>
