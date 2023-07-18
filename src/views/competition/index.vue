<template>
  <div>
    <div class="banner-comp">
      <div class="opa"></div>
      <div class="banner-comp-box">
        <div class="banner-comp-box-text">
          <h1>·智禾|青程比赛</h1>
          <!-- <p>打造国际高端算法竞赛，让选手用算法解决社会或业务问题</p> -->
        </div>
      </div>
      <!-- <div class="banner-comp-menu">
        <div
          class="banner-comp-menu-item"
          :class="{ isActive: item.id === activeId }"
          v-for="(item, index) in menus"
          :key="index"
          @click="getCompInfo(item.id)"
        >
          {{ item.competitionCategory }}
        </div>
      </div> -->
    </div>
    <div class="banner-comp-content">
      <div
        v-for="(item, index) in competitions"
        :key="index"
        class="content-item"
      >
        <div class="item-title">
          <span @click="gotoCompetition(item.id)">{{item.competitiomName}}</span>
          <span class="titleLogo">{{ item.category }}</span>
          <el-button type="primary" round class="button-inter" @click="gotoCompetition(item.id)">点击进入比赛详情</el-button>
        </div>
        <p>举办方：{{ item.organizers }}</p>
        <p>开始时间：{{ item.startTime }}</p>
        <p>结束时间：{{ item.endTime }}</p>
        <div class="status">{{ item.status }}</div>
      </div>
      <div class="pagination">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageInfo.currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageInfo.total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import Building from "../components/building";
import {
  getCompetitionCategory,
  getCompetitionInfo,
  getCompCategoryId,
} from "../../api/competition";

export default {
  name: "index",
  data() {
    return {
      menus: [],
      competitions: [],
      comtotals: [],
      activeId: 1,
      pageInfo: {
        currentPage: 1,
        pageSize: 5,
        total: 0,
      },
      attr: "",
    };
  },
  created() {
    this.getCompCate();
  },
  mounted() {
    this.getCompInfo(1);
  },
  methods: {
    // 前往比赛页面
    gotoCompetition(id) {
      switch(id) {
        case 1:
          this.$router.push(`/competition-details/competition1/${id}`);
          break;
        case 12:
          this.$router.push(`/competition-details/competition2/${id}`);
          break;
        case 13:
          this.$router.push(`/competition-details/competition3/${id}`);
          break;
        case 15:
          this.$router.push(`/competition-details/competition4/${id}`);
          break;
        default:
          break;
      }
      // this.$router.push(`/competition-detail/${id}`);
      // this.$router.push({
      //   path:'/competition-detail',
      //   query:{
      //     id:id
      //   }
      // });
    },
    // 获取比赛类别
    getCompCate() {
      getCompetitionCategory().then((res) => {
        if (res.code === 200) {
          this.menus = res.rows;
          console.log("获取比赛类别", res);
        }
      });
    },
    // 查询比赛详细信息
    getCompInfo(id) {
      this.activeId = id;
      getCompetitionInfo({
        categoryId: id,
      }).then((res) => {
        console.log(res);
        this.comtotals = res.rows;
        this.comtotals.map((item) => {
          // 根据id查询比赛类别
          getCompCategoryId(id).then((res) => {
            this.attr = res.data.competitionCategory;
            // item.category = this.attr;
            this.$set(item, "category", this.attr);
          });
        });
        console.log("this.comtotals", this.comtotals);
        this.competitions = this.comtotals.slice(
          (this.pageInfo.currentPage - 1) * this.pageInfo.pageSize,
          this.pageInfo.currentPage * this.pageInfo.pageSize
        );
        this.pageInfo.total = res.total;
      });
    },
    // 根据id查询比赛类别
    // getCategory(id) {
    //   getCompCategoryId(id).then((res) => {
    //     this.attr = res.data.competitionCategory;
    //   });
    // },
    // 一页数量变化
    handleSizeChange(val) {
      this.pageInfo.pageSize = val;
      this.competitions = this.comtotals.slice(
        (this.pageInfo.currentPage - 1) * this.pageInfo.pageSize,
        this.pageInfo.currentPage * this.pageInfo.pageSize
      );
    },

    // 当前页变化
    handleCurrentChange(val) {
      this.pageInfo.currentPage = val;
      this.competitions = this.comtotals.slice(
        (this.pageInfo.currentPage - 1) * this.pageInfo.pageSize,
        this.pageInfo.currentPage * this.pageInfo.pageSize
      );
    },
  },
};
</script>

<style scoped>
.banner-comp {
  position: relative;
  width: 100%;
  height: 400px;
  /* background: url("../../assets/competition/banner.png") no-repeat 50%; */
  margin: 20px 0;
}
.opa {
  /* background: rgba(24, 47, 99, 0.3); */
  /* background: linear-gradient(70deg, skyblue, pink); */
  background:
      radial-gradient(circle at 50% 0,
        rgba(255,0,0,.5),
        rgba(255,0,0,0) 70.71%),
      radial-gradient(circle at 6.7% 75%,
        rgba(0,0,255,.5),
        rgba(0,0,255,0) 70.71%),
      radial-gradient(circle at 93.3% 75%,
        rgba(0,255,255,.5),
        rgba(0,255,0,0) 70.71%) beige;
  /* border-radius: 50%; */                                                                                                                                                                                                                                                                                          
  border-radius: 10px;
  height: 400px;
  position: absolute;
  width: 1140px;
  left: 50%;
  margin-left: -570px;
}
.banner-comp-box {
  position: absolute;
  width: 600px;
  height: 200px;
  /* background-color: pink; */
  left: 50%;
  margin-left: -300px;
  padding-top: 85px;
}
.banner-comp-box-text {
  text-align: center;
  margin-top: 90px;
}
.banner-comp-box-text h1 {
  font-size: 50px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 40px;
  line-height: 50px;
  letter-spacing: 7px;
}
.banner-comp-box-text p {
  line-height: 36px;
  font-size: 19px;
  color: #fff;
  letter-spacing: 4px;
}
.banner-comp-menu {
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: hsla(0, 0%, 100%, 0.2);
  bottom: 0;
  display: flex;
}
.isActive {
  background-color: #00c1de;
}
.banner-comp-menu-item {
  flex: 1;
  height: 100%;
  /* line-height: 100%; */
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #fff;
}
.banner-comp-menu-item:hover {
  cursor: pointer;
  background-color: #00c1de;
}
.banner-comp-content {
  width: 100%;
}
.content-item {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  padding: 20px 0 0 30px;
  margin: 0 0 20px 0;
  background-color: #f0f6fc;
}
.item-title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.item-title span:nth-child(1) {
  font-size: 20px;
  color: #373d41;
  margin-right: 15px;
}
.titleLogo {
  line-height: 22px;
  height: 22px;
  padding: 0 8px;
  border-radius: 5px;
  color: #fff;
  background-color: rgb(135, 208, 104);
  font-size: 12px;
}
.button-inter {
  position: absolute;
  top: 10%;
  right: 10%;
}
.content-item span:nth-child(1):hover {
  cursor: pointer;
  color: #339dff;
}
.content-item p {
  font-size: 14px;
  color: #a5a5a5;
  font-family: Gotham;
}
.content-item .status {
  position: absolute;
  box-sizing: border-box;
  right: 0;
  bottom: 0;
  width: 42px;
  height: 200px;
  padding: 60px 15px;
  border-radius: 0 10px 10px 0;
  color: #fa8c16;
  background: #fff7e6;
  font: 16px "Gotham";
  text-align: center;
}
.pagination {
  text-align: right;
  margin-bottom: 20px;
}
</style>
