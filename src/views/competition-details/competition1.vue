<template>
    <div>
      <a-page-header @back="() => this.$router.push('/competition')">
        <span slot="title" style="font-weight: normal">比赛服务</span>
      </a-page-header>
      <div class="box-top">
        <div class="top-box">
          <div></div>
          <div>状态</div>
          <div>举办方</div>
          <div>截止日期</div>
  <!--        <div>参赛队伍</div>-->
        </div>
        <div class="bottom-box">
          <div>{{ competInfo.competitiomName }}</div>
          <div>
            <span>{{ competInfo.status }}</span>
          </div>
          <div >{{ competInfo.organizers }}</div>
          <!-- <div>{{ competInfo.endTime.substring(0, 10) }}</div> -->
  <!--        <div>参赛队伍</div>-->
        </div>
        <div class="left-box" :class="{ isShow: apllyShow }" @click="applyBox()">
          <i class="el-icon-edit-outline"></i>
          <h2 v-if="apllyShow">已报名</h2>
          <h2 v-else>报名参赛</h2>
        </div>
      </div>
      <div class="box-content">
        <el-card>
          <el-tabs :tab-position="tabPosition" @tab-click="tabClick">
            <el-tab-pane label="赛制">
              <div style="padding: 10px;font-size: 25px;font-weight: bold">"中国体育彩票"山东省第十二届全民健身运动会航海模型比赛竞赛规程:</div>
              <img src="../../assets/competition/img.png"/>
              <img src="../../assets/competition/img2.png"/>
              <img src="../../assets/competition/img3.png"/>
              <img src="../../assets/competition/img4.png"/>
              <img src="../../assets/competition/img5.png"/>
              <img src="../../assets/competition/img6.png"/>
              <img src="../../assets/competition/img7.png"/>
              <div style="padding: 10px;font-size: 25px;font-weight: bold">第二十二届“我爱祖国海疆”全国青少年航海模型教育竞赛山东省选拔赛规程:</div>
              <img src="../../assets/competition/img8.png"/>
              <img src="../../assets/competition/img9.png"/>
              <img src="../../assets/competition/img10.png"/>
              <img src="../../assets/competition/img11.png"/>
            </el-tab-pane>
            <!-- <el-tab-pane label="我的团队"> -->
            <el-tab-pane label="我的团队" v-if="apllyShow">
              <div style="margin-left: 20px">
                <el-row>
                  <el-col :span="12">
                    <span class="aaaa">代表队名称:</span>
                    <span class="bbbb">{{teamData[0].teamName}}</span>
                  </el-col>
                  <el-col :span="12">
                    <div style="float: right">
                      <el-button  v-if="status===0" type="primary" size="mini" @click="editTeam">修改团队</el-button>
                    </div>
                  </el-col>
                </el-row>
                <!--              <el-button type="primary" size="small">修改团队</el-button>-->
              </div>
              <div style="margin-left: 20px">
                <el-row>
                  <el-col :span="12">
                    <span class="aaaa">地市:</span>
                    <span class="bbbb">{{teamData[0].cityName}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="aaaa">区县:</span>
                    <span class="bbbb">{{teamData[0].countyName}}</span>
                  </el-col>
                </el-row>
              </div>
              <div style="margin-left: 20px">
                <el-row>
                  <el-col :span="12">
                    <span class="aaaa">地址:</span>
                    <span class="bbbb">{{teamData[0].address}}</span>
                  </el-col>
                </el-row>
              </div>
              <div style="margin-left: 20px">
                <el-row>
                  <el-col :span="12">
                    <span class="aaaa">领队:</span>
                    <span class="bbbb">{{teamData[0].teamLeader}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="aaaa">领队电话:</span>
                    <span class="bbbb">{{teamData[0].leaderPhonenumber}}</span>
                  </el-col>
                </el-row>
              </div>
              <div style="margin-left: 20px">
                <el-row>
                  <el-col :span="12">
                    <span class="aaaa">教练员:</span>
                    <span class="bbbb">{{teamData[0].coachName}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span class="aaaa">教练员电话:</span>
                    <span class="bbbb">{{teamData[0].coachPhonenumber}}</span>
                  </el-col>
                </el-row>
             </div>
              <el-button type="danger" disabled v-if="status===2" size="small" style="margin-top: 10px;margin-left: 20px">团队信息审核不通过！</el-button>
              <el-button type="primary" v-else-if="status===1" size="small" style="margin-top: 10px;margin-left: 20px" @click="addPerson" :disabled = "isabled">新增运动员</el-button>
              <el-button type="warning" disabled v-else size="small" style="margin-top: 10px;margin-left: 20px">团队信息还在审核当中！</el-button>
              <div style="margin-top: 10px">
                <el-table
                  :data="personData"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="idNumber"
                    label="身份证号码"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    prop="sex"
                    label="性别"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="groupCategory"
                    label="组别"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="project"
                    label="项目"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    label="操作"
                  >
                    <template slot-scope="scope">
                      <el-button @click="deleteSon(scope.row)" size="small" type="text">删除</el-button>
  
                    </template>
                  </el-table-column>
                </el-table>
                <div class="block">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="10"
                    layout="total, prev, pager, next"
                    :total="personData.length">
                  </el-pagination>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="我的成绩" v-if="competInfo.competitiomName ==='“中国体育彩票”山东省第十二届全民健身运动会'">
              <el-button type="success" @click="openMyAward" style="margin-right: 20px" size="small">我的成绩</el-button>
              <el-button type="primary" icon="el-icon-download" @click="downloadYasuo" size="small">证书下载</el-button>
              <el-table
                :data="tableData"
                border
                style="width: 100%;text-align: center;margin-top: 10px">
                <el-table-column
                  label="序号"
                  align="center"
                  type="index"
                >
                </el-table-column>
                <el-table-column
                  prop="teamname"
                  align="center"
                  label="代表队名称"
                >
                </el-table-column>
                <el-table-column
                  prop="areaname"
                  label="所在地区"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="name"
                  align="center"
                  label="姓名">
                </el-table-column>
                <el-table-column
                  prop="groupname"
                  align="center"
                  label="组别">
                </el-table-column>
                <el-table-column
                  prop="itemname"
                  align="center"
                  label="项目"
                >
                </el-table-column>
                <el-table-column
                  prop="points"
                  align="center"
                  label="分数">
                </el-table-column>
                <el-table-column
                  prop="award"
                  align="center"
                  label="全民运动会获奖">
                </el-table-column>
                <el-table-column
                  prop="loveseaaward"
                  align="center"
                  label="我爱祖国海疆获奖">
                </el-table-column>
              </el-table>
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange000"
                  @current-change="handleCurrentChange000"
                  :current-page.sync="currentPage000"
                  :page-size="10"
                  layout="total, prev, pager, next"
                  :total="total000">
                </el-pagination>
              </div>
  
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </div>
  <!--    团队报名表-->
      <el-dialog
        title="参赛信息表"
        :visible.sync="applyBoxFlag"
        width="750px"
        @close="applyClose"
      >
        <el-form
          :model="applyForm"
          :rules="applyRules"
          ref="applyRef"
          label-width="120px"
          class="demo-ruleForm"
        >
          <div style="font-weight: bold; font-size: 16px; margin-bottom: 10px">
            <span>团队注册信息</span>
          </div>
          <el-row>
            <el-col :span="12">
              <el-form-item label="代表队名称" prop="teamName">
                <el-input
                  v-model="applyForm.teamName"
                  placeholder="请输入代表队名称"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="地市区县" prop="cityName">
                <el-cascader
                  v-model="areaValue"
                  :options="areaOptions"></el-cascader>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="地址" prop="address">
                <el-input v-model="applyForm.address" placeholder="请输入地址" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="领队" prop="teamLeader">
                <el-input v-model="applyForm.teamLeader" placeholder="请输入领队" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="领队联系电话" prop="leaderPhonenumber">
                <el-input
                  v-model="applyForm.leaderPhonenumber"
                  placeholder="请输入领队联系电话"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="教练员1" prop="coachName">
                <el-input
                  v-model="coach.coachName1"
                  placeholder="请输入教练员1"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="教练员1电话" prop="coachPhonenumber">
                <el-input
                  v-model="coach.coachPhonenumber1"
                  placeholder="请输入教练员1电话"
                />
              </el-form-item>
            </el-col>
          </el-row>
        <el-row>
        <el-col :span="12">
             <el-form-item label="教练员2">
               <el-input
                 v-model="coach.coachName2"
                 placeholder="请输入教练员2"
               />
             </el-form-item>
           </el-col>
           <el-col :span="12">
             <el-form-item label="教练员2电话">
               <el-input
                 v-model="coach.coachPhonenumber2"
                 placeholder="请输入教练员2电话"
               />
             </el-form-item>
           </el-col>
         </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addComInfo()">确 定</el-button>
          <el-button @click="applyBoxFlag = false">取 消</el-button>
        </span>
      </el-dialog>
  <!--    修改团队表-->
      <el-dialog
        title="修改团队"
        :visible.sync="editTeamFlag"
        width="750px"
      >
        <el-form
          :model="editApplyForm"
          :rules="applyRules"
          ref="editApplyRef"
          label-width="120px"
          class="demo-ruleForm"
        >
          <div style="font-weight: bold; font-size: 16px; margin-bottom: 10px">
            <span>修改团队信息</span>
          </div>
          <el-row>
            <el-col :span="12">
              <el-form-item label="代表队名称" prop="teamName">
                <el-input
                  v-model="editApplyForm.teamName"
                  placeholder="请输入代表队名称"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="地市区县" prop="cityName">
                <el-cascader
                  v-model="areaValue1"
                  :options="areaOptions"></el-cascader>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="地址" prop="address">
                <el-input v-model="editApplyForm.address" placeholder="请输入地址" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="领队" prop="teamLeader">
                <el-input v-model="editApplyForm.teamLeader" placeholder="请输入领队" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="领队联系电话" prop="leaderPhonenumber">
                <el-input
                  v-model="editApplyForm.leaderPhonenumber"
                  placeholder="请输入领队联系电话"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="教练员1" prop="coachName1">
                <el-input
                  v-model="coach.coachName1"
                  placeholder="请输入教练员1"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="教练员1电话" prop="coachPhonenumber1">
                <el-input
                  v-model="coach.coachPhonenumber1"
                  placeholder="请输入教练员1电话"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="教练员2">
                <el-input
                  v-model="coach.coachName2"
                  placeholder="请输入教练员2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="教练员2电话">
                <el-input
                  v-model="coach.coachPhonenumber2"
                  placeholder="请输入教练员2电话"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="editComInfo()">确 定</el-button>
          <el-button @click="editTeamFlag = false">取 消</el-button>
        </span>
      </el-dialog>
      <!--新增远动员-->
      <el-dialog
        title="新增运动员"
        :visible.sync="addpersonflag"
        width="50%"
        >
        <el-form
          :model="addperson"
          :rules="rules000"
          ref="adders"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="addperson.name" placeholder="请输入姓名" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="身份证号码" prop="idNumber">
                <el-input v-model="addperson.idNumber" placeholder="请输入身份证号码" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="性别" prop="sex">
  <!--              <el-input v-model="addperson.sex" placeholder="请输入性别" />-->
                <el-select v-model="addperson.sex" placeholder="请选择性别">
                  <el-option
                    v-for="item in options000"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="组别" prop="groupCategory">
  <!--              <el-input v-model="addperson.groupCategory" placeholder="请输入组别" />-->
                <el-select v-model="addperson.groupCategory" placeholder="请选择组别">
                  <el-option
                    v-for="item in options222"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目" prop="project">
  <!--              <el-input v-model="addperson.project" placeholder="请输入项目" />-->
                <el-select v-model="addperson.project" placeholder="请选择项目">
                  <el-option
                    v-for="item in options111"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="conAddPerson()">确 定</el-button>
           <el-button @click="addpersonflag = false">取 消</el-button>
        </span>
      </el-dialog>
  <!--    我的成绩-->
      <el-dialog
        title="我的成绩"
        :visible.sync="myTeamdialogVisible"
        width="70%"
        >
        <el-table
          :data="myTeamData"
          border
          style="width: 100%;text-align: center;margin-top: 10px;">
          <el-table-column
            label="序号"
            align="center"
            type="index"
            width="70"
          >
          </el-table-column>
          <el-table-column
            prop="teamname"
            align="center"
            label="代表队名称"
          >
          </el-table-column>
          <el-table-column
            prop="areaname"
            label="所在地区"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="groupname"
            align="center"
            label="组别">
          </el-table-column>
          <el-table-column
            prop="itemname"
            align="center"
            label="项目"
          >
          </el-table-column>
          <el-table-column
            prop="points"
            align="center"
            label="分数">
          </el-table-column>
          <el-table-column
            prop="award"
            align="center"
            label="全民运动会获奖">
          </el-table-column>
          <el-table-column
            prop="loveseaaward"
            align="center"
            label="我爱祖国海疆获奖">
          </el-table-column>
        </el-table>
         <el-button type="primary" slot="footer" class="dialog-footer" @click="myTeamdialogVisible = false">关
           闭</el-button>
      </el-dialog>
    </div>
  </template>
  <script>
  import {
    getCompInfoById,
    addComInfo,
    getCompetUserById,
    addComTeam,
    getTeamInfo,
    getMembersInfo,
    delTeam,
    modifyComTeam,
    applyTeam,
    agreeApply,
    refuseApply,
    // getCompetitionClassification,
    getCommitted,
    getResults,
    // getPdf,
    registration,
    getTeam,
    addPerson,
    getPerson,
    deletePerson,
    editTeam,
    getAllAward,
    getStatus,
    getMyTeamAward,
    selectDownloadPdf
  } from "../../api/competition";
  import { getToken } from "../../utils/auth";
  import areaOptions from "../../utils/addressDate"
  export default {
    data() {
      return {
        typeFlag: undefined,
        status:0,
        isabled:false,
        areaValue:[],
        areaValue1:[],
        areaOptions,
        myTeamdialogVisible:false,
        myTeamData:[],
        total000: 0,
        currentPage000: 1,
        tableData: [],
        uploadData: [],
        teamData:[],
        personData:[],
        addperson: {
          name: "",
          project: "",
          sex: "",
          idNumber: "",
          groupCategory: "",
          createBy: '',
          competitionId: 0,
          teamId: 0
        },
        fileList: [],
        competInfo: {},
        tabPosition: "left",
        applyBoxFlag: false,
        apllyShow: false,
        activeName: "first",
        applyBoxFlag1111111: false,
        coach:{
          coachName1:'',
          coachName2:'',
          coachPhonenumber1:'',
          coachPhonenumber2:''
        },
        editCoach:{
          coachName1:'',
          coachName2:'',
          coachPhonenumber1:'',
          coachPhonenumber2:''
        },
        applyForm: {
          createBy: '',
          address: "",
          cityName: "",
          coachName: "",
          coachPhonenumber: "",
          countyName: "",
          institutionCode: "",
          leaderPhonenumber: "",
          teamLeader: "",
          teamName: "",
          imageUrl: '',
        },
        editApplyForm: {},
        rules000:{
          name:  [
            { required: true, message: '请输入运动员姓名', trigger: 'blur' }
          ],
          project:  [
            { required: true, message: '请选择项目', trigger: 'change' }
          ],
          sex:  [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          idNumber:  [
            { required: true, message: '请输入运动员身份证号', trigger: 'blur' }
          ],
          groupCategory:  [
            { required: true, message: '请选择组别', trigger: 'change' }
          ],
        },
        applyRules: {
          teamName:  [
            { required: true, message: '请输入代表团名称', trigger: 'blur' }
          ],
          // institutionCode:  [
          //   { required: true, message: '请输入组织机构代码', trigger: 'blur' }
          // ],
          cityName:  [
            { required: true, message: '请输入地市', trigger: 'blur' }
          ],
          countyName:  [
            { required: true, message: '请输入区县', trigger: 'blur' }
          ],
          address:  [
            { required: true, message: '请输入地址', trigger: 'blur' }
          ],
          teamLeader:  [
            { required: true, message: '请输入领队', trigger: 'blur' }
          ],
          leaderPhonenumber:  [
            { required: true, message: '请输入领队联系电话', trigger: 'blur' }
          ],
        },
        applyTeamRules: {
          teamName: [
            { required: true, message: "队伍名称不能为空", trigger: "blur" },
          ],
        },
        applyTeamForm: {
          teamName: "",
        },
        teamTabLoad: true,
        teamName: "",
        teamMembers: [],
        teamMembersThree: [],
        teamShow: false,
        tuxingShow: false,
        zhinengShow: false,
        teamId: "",
        myTeamId:null,
        modifyName: "",
        modifyNameFlag: true,
        searchName: "",
        teamDataList: [],
        applyedData: {},
        captainFlag: false,
        teamWeiLoad: false,
        applyTeamFlag: false,
        applyingData: {},
        applyingTeamName: "",
        // 0是无组，1是有组织，待审批，2是有组织，已同意
        userStatus: "",
        // 有组织，未审批时的申请id,即撤销时使用的id
        undo: 0,
        qiniuToken: "",
        resultForm: {},
        addForm: {
          competitionId: "",
          submitUser: "",
          workName: "",
          works: "",
        },
        addRules: {
          workName: [
            { required: true, message: "请输入作品名称", trigger: "blur" },
          ],
        },
        buttonFlag: false,
        results: "",
        // 七牛云token
        qiniuToken000: "",
        addpersonflag: false,
        options000: [{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }],
        options111: [
          {
          value: 'C6（塑料商品舰船模型）',
          label: 'C6（塑料商品舰船模型）'
        }, {
          value: 'C8（非塑料的商品套材舰船模型）',
          label: 'C8（非塑料的商品套材舰船模型）'
        }, {
          value: '"日照号"导弹护卫舰模型制作赛',
          label: '"日照号"导弹护卫舰模型制作赛'
        }, {
          value: '"沂蒙山号"两栖登陆舰模型制作赛',
          label: '"沂蒙山号"两栖登陆舰模型制作赛'
        }, {
          value: '"义乌号"导弹护卫舰模型制作赛',
          label: '"义乌号"导弹护卫舰模型制作赛'
        }, {
          value: '"南湖红船"电动拼装模型制作赛',
          label: '"南湖红船"电动拼装模型制作赛'
        }, {
          value: '"辽宁号"航空母舰模型制作赛',
          label: '"辽宁号"航空母舰模型制作赛'
        }, {
          value: '"中国海警船"电动拼装模型制作赛',
          label: '"中国海警船"电动拼装模型制作赛'
        }
        ],
        options222: [
          {
            value: '公开组',
            label: '公开组'
          },{
            value: '小学男子组',
            label: '小学男子组'
          },{
            value: '小学女子组',
            label: '小学女子组'
          },{
            value: '初中男子组',
            label: '初中男子组'
          },{
            value: '初中女子组',
            label: '初中女子组'
          },{
            value: '高中男子组',
            label: '高中男子组'
          },{
            value: '高中女子组',
            label: '高中女子组'
          }
        ],
        editTeamFlag: false,
        uploadFlag: false,
        currentPage1: 5,
        athleteId: undefined,
        teamSelect: "",
        projectSelect: '',
        aaaa: '德州青少年宫'
      };
    },
    computed: {
      competId() {
        return this.$route.params.id;
      },
      userId() {
        return this.$store.state.userInfo.userId;
      },
      userName() {
        return this.$store.state.userInfo.userName;
      },
      nowTime() {
        var data = new Date();
        return data.toLocaleString();
      },
      total() {
        return (
          parseInt(this.resultForm.scoreOne) +
          parseInt(this.resultForm.scoreTwo) +
          parseInt(this.resultForm.scoreThree) +
          parseInt(this.resultForm.scoreFour)
        );
      },
    },
    created() {
      
    },
    mounted() {
      // 查询是否已经有团队
      this.getTeam();
      // 获取比赛详细信息
      this.getComDetail();
      // 获取所有获奖
      this.getAllAward();
      //获取团队申请状态
      // this.getStatus();
    },
    methods: {
      getStatus() {
        console.log("队伍ID",this.teamId)
        getStatus(this.teamId).then((res)=>{
          console.log("申请状态",res)
          this.status=res
        })
      },
      getAllAward(){
        let params = {
          pageSize: 10,
          pageNum: 1,
          competitionId:+this.competId,
        };
        console.log(params);
        getAllAward(params).then((res) => {
          this.tableData = res.rows;
          this.total000 = res.total;
          console.log(this.tableData)
        })
      },
      handleSizeChange000(){},
      handleCurrentChange000(val){
        console.log(`当前页: ${val}`);
        this.currentPage000 = val;
        let params = {
          pageSize: 10,
          pageNum: this.currentPage000
        };
        // console.log(params);
        getAllAward(params).then((res) => {
          this.tableData = res.rows;
          this.total000 = res.total;
        })
      },
      progressAvatarUpload222() {},
      beforeAvatarUpload222() {},
      uploadZuopin(id){
        console.log("id =",id)
        this.athleteId = id;
        this.uploadFlag = true;
      },
      handleSizeChange(){},
      handleCurrentChange(){},
      editTeam(){
        this.editTeamFlag = true;
      },
      editComInfo(){
        this.editApplyForm.cityName = this.areaValue1[0]
        this.editApplyForm.countyName = this.areaValue1[1]
        this.$refs.editApplyRef.validate((valid) => {
          if (valid) {
            editTeam(
                {
                  teamName: this.editApplyForm.teamName,
                  teamId: this.teamData[0].teamId,
                  address: this.editApplyForm.address,
                  cityName: this.editApplyForm.cityName,
                  coachName: this.editApplyForm.coachName,
                  coachPhonenumber: this.editApplyForm.coachPhonenumber,
                  createBy:  this.userName,
                  imageUrl: this.editApplyForm.imageUrl,
                  institutionCode: this.editApplyForm.institutionCode,
                  teamLeader: this.editApplyForm.teamLeader,
                  leaderPhonenumber: this.editApplyForm.leaderPhonenumber,
                }
            ).then((res) => {
              console.log(res);
              if (res.code !== 200) return this.$message.error("信息提交失败！");
              this.$message.success("信息修改成功!");
              console.log(res);
              this.editTeamFlag = false;
              this.editApplyForm = {};
              this.getTeam();
            });
          } else {
            return this.$message.error("请填写必要的表单项！");
          }
        });
  
      },
      deleteSon(row) {
        console.log(row);
        if(row.ifUpload === 1){
          this.$message.warning("已上传作品运动员，请勿删除!");
        } else{
          deletePerson(row.id).then( (res) => {
            console.log(res,"删除成功");
            this.$message.success("运动员删除成功!");
            this.getPerson();
          })
        }
  
      },
      // getCompetitionClass(){
      //   getCompetitionClassification({
      //     id:this.competId,
      //     ompetitionName:this.competInfo.competitiomName
      //   }).then((res)=>{
      //     console.log(res.data)
      //     const list = res.data.option1
      //     const list1 = res.data.option2
      //     for(let i = 0; i<list.length;i++) {
      //       this.options111.push({value:list[i],label:list[i]})
      //     }
      //     for(let i =0; i<list1.length;i++) {
      //       this.options222.push({value:list1[i],label:list1[i]})
      //     }
      //   })
      // },
      getPerson(){
        getPerson({
          teamId: this.teamData[0].teamId
        }).then((res) => {
          this.personData = res.rows;
        })
      },
      conAddPerson(){
        this.$refs.adders.validate((valid) => {
          console.log('valid',valid)
          if (valid) {
            this.addperson.competitionId = this.competInfo.id;
            this.addperson.createBy = this.userName;
            this.addperson.teamId = this.teamData[0].teamId;
            // console.log(this.addperson);
            addPerson(this.addperson).then( (res) => {
              if(res.code === 200) {
                // console.log(res,'新增成功');
                this.$message.success("新增运动员成功");
                // 清除规则
                this.$refs.adders.resetFields();
                this.addpersonflag = false;
                this.addperson = {};
                this.getPerson();
              } else {
                this.addpersonflag = false;
                this.addperson = {};
                this.getPerson();
                this.$message.warning("超出运动员数量限制，非公开组最多10位运动员!");
              }
  
            })
          } else {
            return this.$message.error("请填写必要的表单项！");
          }
        });
      },
      //我的成绩点击事件
      openMyAward() {
        this.myTeamdialogVisible = true
      },
      addPerson() {
        this.addpersonflag = true;
        // this.getCompetitionClass();
      },
      getTeam(){
        getTeam({createBy:this.userName,
          competitionId:this.competId}).then( (res) => {
          if (res.total === 0) {
            this.apllyShow = false;
          } else {
            this.apllyShow = true;
            this.teamData = res.rows;
            this.editApplyForm= this.teamData[0];
            console.log(this.editApplyForm,'this.teamData')
            this.teamId = this.teamData[0].teamId;
            //获取团队申请状态
            this.getStatus();
            this.getPerson();
          }
          console.log("查询报名信息000", this.teamData);
          
        })
      },
      // 获取比赛详细信息
      getComDetail() {
        // 根据Id获取比赛详细信息
        getCompInfoById(this.competId).then((res) => {
          this.competInfo = res.data;
          // console.log("比赛信息",this.competInfo);
          if(this.competInfo.status === "已结束") this.isabled = true
        });
      },
      // 报名信息表
      applyBox() {
        if (this.apllyShow === false) {
          if(this.competInfo.status === "进行中") this.applyBoxFlag = true;
          // 比赛结束时重置，将比赛报名、修改团队、新增运动员、上传作品按钮 禁用
  
        } else {
          return this.$message.warning("您已提交报名信息，请勿重复操作！");
        }
      },
      // 提交报名信息
      addComInfo() {
        this.applyForm.cityName=this.areaValue[0]
        this.applyForm.countyName = this.areaValue[1]
        this.applyForm.coachName = this.coach.coachName1 + ',' + this.coach.coachName2
        this.applyForm.coachPhonenumber = this.coach.coachPhonenumber1 + ',' + this.coach.coachPhonenumber2
        this.$refs.applyRef.validate((valid) => {
          if (valid) {
            this.applyForm.competitionId = this.competInfo.id;
            this.applyForm.createBy = this.userName;
            console.log(this.applyForm);
            registration(this.applyForm).then((res) => {
              console.log(res);
              if (res.code !== 200) return this.$message.error("信息提交失败！");
              this.$message.success("信息提交成功!");
              console.log(res);
              this.applyBoxFlag = false;
              this.apllyShow = true;
              this.getTeam();
            });
          } else {
            return this.$message.error("请填写必要的表单项！");
          }
        });
  
  
  
        
      },
      // 报名信息表关闭
      applyClose() {
        // 带有prop属性的表单清空
        this.$refs.applyRef.resetFields();
      },
      // 组织一个队伍
      createTeam() {
        if (this.userStatus === "0") {
          this.$refs.applyTeamRef.validate((valid) => {
            if (!valid) {
              return this.$message.warning("请输入队伍名称！");
            }
            this.$confirm("此操作将创建该队伍, 是否继续?", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning",
            }).then(() => {
              // 创建比赛队伍
              addComTeam({
                competitionId: this.competId,
                creater: this.userId,
                teamName: this.applyTeamForm.teamName,
              }).then((res) => {
                if (res.code !== 200)
                  return this.$message.error("队伍创建失败！");
                // 开启加载进度条
                this.teamTabLoad = true;
                this.$refs.applyTeamRef.resetFields();
                this.teamShow = true;
                // 获取队伍
                this.getMyteam();
                this.userStatus = "2";
                // 2s后关闭加载进度条
                setTimeout(() => {
                  this.teamTabLoad = false;
                  this.$message.success("队伍创建成功!");
                }, 2000);
              });
            });
          });
        } else if (this.userStatus === "1") {
          return this.$message.warning("您尚有待审批的团队申请，请勿重复操作！");
        } else if (this.userStatus === "2") {
          return this.$message.warning("您已加入团队，请勿重复操作！");
        }
      },
      // 获取我的队伍信息
      getMyteam() {
        getMembersInfo({
          competitionId: this.competId,
          teamMember: this.userId,
        }).then((res) => {
          console.log("获取我的队伍信息",res)
          // 队伍不存在
          if (res.data.length === 0) {
            this.teamShow = false;
            this.applyTeamFlag = false;
            this.userStatus = "0";
            setTimeout(() => {
              this.teamTabLoad = false;
            }, 2000);
          } else {
            // 队伍存在
            // 还不是成员
            if (res.data[0].applicationStatus === "3") {
              this.applyTeamFlag = true;
              this.teamShow = false;
              (this.userStatus = "1"), (this.undo = res.data[0].id);
              this.applyingTeamName = res.data[0].teamName;
              this.teamTabLoad = false;
            } else {
              // 已经是成员
              this.userStatus = "2";
              this.teamName = res.data[0].teamName;
              this.teamId = res.data[0].teamId;
              // 判断是不是队长
              if (res.data[0].teamMember === res.data[0].creater) {
                this.captainFlag = true;
              } else {
                this.captainFlag = false;
              }
              // 查询该队伍中的所有成员
              this.getStatusById(1);
              this.teamShow = true;
              this.teamTabLoad = false;
            }
          }
        });
      },
      // 查询队伍中applicationStatus是1的所有成员
      getStatusById(val) {
        if (val === 1) {
          getMembersInfo({
            competitionId: this.competId,
            teamId: this.teamId,
            applicationStatus: "1",
          }).then((res) => {
            console.log("获取队伍的成员信息", res);
            // 筛选状态是1的组员
            this.teamMembers = res.data;
          });
        } else {
          getMembersInfo({
            competitionId: this.competId,
            teamId: this.teamId,
            applicationStatus: "3",
          }).then((res) => {
            console.log("获取队伍未审批的成员信息", res);
            if (res.data.length !== 0) {
              // 筛选状态是3的组员
              this.teamMembersThree = res.data;
            } else {
              this.teamMembersThree = [];
            }
          });
        }
      },
      // 获取队伍信息
      getTeamInforma() {
        getTeamInfo({
          competitionId: this.competId,
        }).then((res) => {
          // 队伍存在
          if (res.total !== 0) {
            this.teamName = res.rows[0].teamName;
            this.teamId = res.rows[0].id;
            this.teamShow = true;
            setTimeout(() => {
              this.teamTabLoad = false;
            }, 2000);
            // 获取队伍成员信息
            getMembersInfo({
              competitionId: this.competId,
              id: res.rows[0].id,
            }).then((res) => {
              console.log("获取队伍的成员信息", res);
              this.teamMembers = res.data;
            });
          } else {
            // 队伍不存在
            this.teamShow = false;
            setTimeout(() => {
              this.teamTabLoad = false;
            }, 2000);
          }
        });
      },
      // tab被选中
      tabClick(val) {
        if (val.index === "3") {
          // 获取队伍信息,查看自己有没有队伍
          this.getMyteam();
          console.log("3333333");
        } else if (val.index == "1") {
          // 获取七牛云token
          // this.getQiniuToken();
          console.log("111111111");
        } else if (val.index == "2") {
          // 获取评审结果
          getResults();
          console.log("22222222");
          this.getReviewResult();
        }
      },
      // 获取评审结果
      getReviewResult() {
        getCommitted({
          competitionId: this.competId,
          userId: this.userId,
        }).then((res) => {
          console.log("查看团队的信息", res);
          if (res.data.length == 0) {
            this.tuxingShow = false;
            this.zhinengShow = false;
            this.$message.warning("暂无成绩结果，请耐心等耐！");
          } else {
            this.axios({
              method: "get",
              headers: { Authorization: getToken() },
              url:
                "http://123.56.149.85:11090/system/score/list?workId=" +
                res.data[0].workId,
            }).then((res) => {
              console.log("fasfsdfsa", res);
              this.resultForm = res.data.rows[0];
              if (res.data.rows[0].evaluateType == 1) {
                this.tuxingShow = true;
                this.zhinengShow = false;
              } else {
                this.tuxingShow = false;
                this.zhinengShow = true;
              }
              console.log("this.resultForm", this.resultForm);
            });
          }
        });
      },
      //下载证书压缩包
      downloadYasuo() {
      // console.log(this.aaaa);
      // console.log('八嘎',this.teamData[0].teamName);
      console.log('八嘎',this.teamName);
      let token = getToken();
      var xhr = new XMLHttpRequest(); // 用这种原生请求下载后端返回的二进制流打开就不会出现空白
      xhr.open(
        "get",
        // `http://8.141.164.231/prod-api/competition/exportPDF/getPDF?teamName=${this.aaaa}`,
        `http://8.141.164.231/prod-api/competition/exportPDF/getPDF?teamName=${this.teamName}`,
        true
      );
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Content-Type', 'charset=UTF-8');
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.responseType = "blob";
      xhr.onload = function () {
        const url = window.URL.createObjectURL(this.response);
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = url;
        link.setAttribute("download", "证书.zip");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      xhr.send();
    },
      // 修改队伍
      modifyTeam() {
        this.modifyNameFlag = false;
        this.modifyName = this.teamName;
      },
      // 取消修改队伍
      cancelModify() {
        this.modifyNameFlag = true;
      },
      // 确认修改队伍
      enterModify() {
        this.$confirm("此操作将修改队伍, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          // 修改比赛队伍
          modifyComTeam({
            competitionId: this.competId,
            creater: this.userId,
            teamName: this.modifyName,
            id: this.teamId,
          }).then((res) => {
            if (res.code !== 200) return this.$message.error("修改失败！");
            // 开启加载进度条
            this.teamTabLoad = true;
            this.modifyName = "";
            this.teamShow = true;
            // 获取队伍
            this.getTeamInforma();
            this.modifyNameFlag = true;
            // 2s后关闭加载进度条
            setTimeout(() => {
              this.teamTabLoad = false;
              this.$message.success("修改成功!");
            }, 2000);
          });
        });
      },
      // 删除队伍
      deleteTeam() {
        this.$confirm("此操作将删除该队伍, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          delTeam(this.teamId).then((res) => {
            if (res.code !== 200) return this.$message.error("队伍删除失败！");
            // 开启加载进度条
            this.teamTabLoad = true;
            // 2s后关闭加载进度条
            setTimeout(() => {
              this.teamTabLoad = false;
              this.userStatus = "0";
              this.$message.success("队伍删除成功!");
            }, 2000);
            this.teamShow = false;
          });
        });
      },
      // 搜索队伍
      searchTeam() {
        if (this.searchName === "") {
          return this.$message.warning("请输入队伍名字");
        }
        getTeamInfo({
          teamName: this.searchName,
          competitionId: this.competId,
        }).then((res) => {
          if (res.total !== 0) {
            this.teamDataList = res.rows;
          } else {
            this.$message.warning("该队伍不存在，建议重新输入！");
            this.teamDataList = [];
          }
        });
      },
      // 申请队伍
      applybtn(row) {
        if (this.userStatus === "0") {
          // 申请队伍
          applyTeam({
            teamMember: this.userId,
            teamId: row.id,
            applicationStatus: "3",
          }).then((res) => {
            this.$message.success("申请已发出，请等待审批！");
            this.userStatus = "1";
            this.teamTabLoad = true;
            this.getMember();
            // 2s后关闭加载进度条
            setTimeout(() => {
              this.teamTabLoad = false;
            }, 2000);
          });
        } else if (this.userStatus === "1") {
          return this.$message.warning("您尚有待审批的团队申请，请勿重复操作！");
        } else if (this.userStatus === "2") {
          return this.$message.warning("您已加入团队，请勿重复操作！");
        }
      },
      // 判断用户是否发出过申请/判断用户有没有队伍
      getMember() {
        getMembersInfo({
          competitionId: this.competId,
          teamMember: this.userId,
          applicationStatus: "3",
        }).then((res) => {
          if (res.data.length !== 0) {
            this.applyTeamFlag = true;
            this.applyingData = res.data[0];
          } else {
            this.applyTeamFlag = false;
          }
        });
      },
      // 切换组织队伍/加入队伍标签页
      // tabsClick(val) {
      //   //   if(val.index === '1') {
      //   //  }
      // },
      captainTabsClick(val) {
        // 点击已加入
        if (val.index === "0") {
          // 刷新未加入列表
          this.teamWeiLoad = true;
          // 刷新队伍成员列表
          this.getStatusById(1);
          // 2s后关闭加载进度条
          setTimeout(() => {
            this.teamWeiLoad = false;
          }, 2000);
        } else if (val.index === "1") {
          // 点击未加入
          // 刷新已加入列表
          this.teamWeiLoad = true;
          // 刷新队伍成员列表
          // 查询所有status不为1的成员
          this.getStatusById(3);
          // 2s后关闭加载进度条
          setTimeout(() => {
            this.teamWeiLoad = false;
          }, 2000);
        }
      },
      // 同意审批
      agree(row) {
        console.log(row);
        this.$confirm("此操作将同意该审批, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          // 同意审批
          agreeApply({
            applicationStatus: "1",
            teamId: row.teamId,
            teamMember: row.teamMember,
            id: row.id,
          }).then((res) => {
            console.log("同意审批", res);
            // 刷新未加入列表
            this.teamWeiLoad = true;
            this.getStatusById(3);
            // 2s后关闭加载进度条
            setTimeout(() => {
              this.teamWeiLoad = false;
            }, 2000);
          });
        });
      },
      // 判断审批状态
      userStatusById(val) {
        if (val === "0") {
          this.applyTeamFlag = false;
          this.teamShow = false;
        } else if (val === "1") {
          this.applyTeamFlag = true;
          this.teamShow = false;
        } else if (val === "2") {
          this.applyTeamFlag = false;
          this.teamShow = true;
        }
      },
      // 拒绝审批
      refuse(row) {
        this.$confirm("此操作将拒绝该审批, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          // 拒绝审批
          refuseApply(row.id).then(() => {
            // 刷新未加入列表
            this.teamWeiLoad = true;
            this.getStatusById(3);
            // 2s后关闭加载进度条
            setTimeout(() => {
              this.teamWeiLoad = false;
            }, 2000);
          });
        });
      },
      /* 撤销审批 */
      undoApply() {
        this.$confirm("此操作将撤销该审批, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          // 查一下undo
          getMembersInfo({
            competitionId: this.competId,
            teamMember: this.userId,
          }).then((res) => {
            // 如果此时你的申请已经被同意，但是你没有刷新页面
            if (res.data.length === 0) {
              return this.$message.error(
                "您的团队申请已被拒绝！请刷新页面后重新操作！"
              );
            } else if (res.data[0].applicationStatus === "1") {
              return this.$message.warning(
                "您的团队申请已通过！请及时刷新页面！"
              );
            } else if (res.data[0].applicationStatus === "3") {
              refuseApply(res.data[0].id).then((res) => {
                if (res.code === 200) {
                  this.$message.success("撤销成功！");
                  this.userStatus = "0";
                  this.userStatusById("0");
                }
              });
            }
          });
        });
      },
    },
  };
  </script>
  <style scoped>
  .aaaa{
    font-size: 15px;font-weight: bold;margin-right: 10px;width: 100px;
  }
  .bbbb{
    font-size: 15px;margin-right: 100px;
  }
  .box-content {
    margin: 30px 0px 30px 0px;
  }
  .box-top {
    position: relative;
  }
  .top-box {
    display: flex;
    width: 990px;
    height: 66px;
    line-height: 66px;
    font-size: 14px;
    color: #666;
    text-align: center;
    background-color: #f0f6fc;
  }
  .top-box div:nth-child(1) {
    flex: 4;
  }
  .top-box div:nth-child(2) {
    flex: 1;
  }
  .top-box div:nth-child(3) {
    flex: 2;
    /*flex-flow: nowrap;*/
    /*background-color: #2d78f5;*/
  }
  .top-box div:nth-child(4) {
    flex: 1;
  }
  .top-box div:nth-child(5) {
    flex: 1;
  }
  .bottom-box {
    display: flex;
    width: 990px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-top: 1px solid #ccc;
    background-color: #f0f6fc;
  }
  .bottom-box div:nth-child(1) {
    flex: 4;
    font-size: 22px;
    font-weight: 400;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .bottom-box div:nth-child(2) {
    flex: 1;
    text-align: center;
  }
  .bottom-box div:nth-child(2) span {
    padding: 5px 9px;
    border-radius: 3px;
    text-align: center;
    background-color: rgb(135, 208, 104);
    color: #fff;
  }
  .bottom-box div:nth-child(3) {
    flex: 2;
    flex-flow: nowrap;
    /*background-color: #67c23a;*/
    font-size: 16px;
    font-weight: 400;
    color: #333;
  }
  .bottom-box div:nth-child(4) {
    flex: 1;
    font-size: 16px;
    font-weight: 400;
    color: #333;
  }
  .bottom-box div:nth-child(5) {
    flex: 1;
  }
  .left-box {
    position: absolute;
    top: 0;
    right: 0;
    width: 132px;
    height: 116px;
    background-color: #2d78f5;
    text-align: center;
    font-size: 22px;
    color: #fff;
    padding-top: 30px;
    cursor: pointer;
  }  
  .left-box h2 {
    font-size: 16px;
    color: #fff;
  }
  .isShow {
    background-color: #f56c6c;
  }
  .leftword {
    padding-top: 11px;
  }
  .team-top {
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
  }
  .team-top .team-top-h1 {
    display: flex;
    flex: 3;
  }
  .team-top .team-top-h1 /deep/.el-input__inner {
    height: 31px !important;
  }
  /* .team-top .team-top-btn1 { */
    /* flex: 1; */
  /* } */
  /* .team-top .team-top-btn2 { */
    /* flex: 1; */
  /* } */
  .team-table {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .upload {
    /* background-color: pink; */
    text-align: center;
    padding: 25px;
  }
  .uploadbtn {
    padding-left: 90px;
  }
  .divide {
    margin-top: 30px;
  }
  .total {
    margin-left: 30px;
    font-weight: 700;
  }
  .total span:nth-child(1) {
    font-size: 20px;
    color: #ff4949;
  }
  .review {
    margin-right: 10px;
    font-weight: 700;
  }
  .review::before {
    display: inline-block;
    content: "*";
    color: #ff4949;
    font-size: 15px;
    margin-right: 5px;
  }
  .review1 {
    margin-right: 20px;
    font-weight: 700;
  }
  .review1::before {
    display: inline-block;
    content: "*";
    color: #ff4949;
    font-size: 15px;
    margin-right: 5px;
  }
  .pingshen span:nth-child(1) {
    margin-left: 25px;
    font-size: 15px;
    font-weight: 700;
  }
  .pingshen span:nth-child(2) {
    margin-left: 15px;
    font-size: 17px;
    color: #ff4949;
    font-weight: 700;
  }
  </style>
  
