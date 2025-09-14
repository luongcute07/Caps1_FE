<template>
  <main>
    <!-- Alert -->
    <div v-if="visible" class="alert-bar">
    <div class="alert-content">
      <span class="dot"></span>
      <i class="fa-solid fa-triangle-exclamation"></i>
      <strong> KHẨN CẤP: </strong>
      <span>Hiện đang cần nhóm máu O tại BV Đà Nẵng</span>
    </div>

    <div class="alert-actions">
      <button class="btn-register">
        <i class="fa-solid fa-hand-holding-medical"></i> Đăng ký ngay
      </button>
      <button class="btn-close" @click="closeAlert">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </div>
    
    <!-- Hero Section -->
    <div class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6 mt-5 mb-5">
          <h1 class="fw-bold display-4 mt-5">
            Hệ Thống <span class="text-danger">Hiến Máu</span> Thông Minh
          </h1>
          <p class="text-secondary mt-3">
            Kết nối người hiến máu, bệnh viện và ngân hàng máu trên một nền tảng trực tuyến an toàn,
            tiện lợi, minh bạch
          </p>
          <div class="mt-4 mb-5">
            <a href="#" class="btn btn-danger me-3">Bắt đầu ngay</a>
            <a href="#" class="btn btn-outline-danger">Tìm hiểu thêm</a>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <img
            src="@/assets/homepage.png"
            class="img-fluid"
            alt="Blood Donation"
          />
        </div>
      </div>
    </div>

    <!-- <GoalCard/>
    <router-view />
    <FeatureCard/>
     -->
    <!-- <GoalCard/>-->
    <section class="goals-section text-center">
    <h2 class="fw-bold">Mục Tiêu</h2>
    <p class="text-muted">Xây dựng hệ thống hiến máu toàn diện và hiệu quả</p>

    <div class="container mt-4">
      <div class="row g-4">
        <div v-for="(goal, index) in goals" :key="index" class="col-md-4">
          <div class="goal-card">
            <div class="goal-icon">
              <i :class="['fa-solid', goal.icon]"></i>
            </div>
            <div>
              <h6 class="goal-title">{{ goal.title }}</h6>
              <p class="goal-text">{{ goal.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--<FeatureCard/>-->
  <section class="features-section py-5">
    <div class="container text-center">
      <h2 class="fw-bold">Tính Năng Nổi Bật</h2>
      <p class="text-muted">Những tính năng đặc biệt giúp tối ưu hóa quy trình hiến máu</p>
      <div class="underline"></div>

      <div class="row g-4 mt-4">
        <div v-for="(feature, index) in features" :key="index" class="col-md-3">
          <div class="feature-card">
            <div class="icon-wrapper">
              <i :class="['fa-solid', feature.icon]"></i>
            </div>
            <h6 class="fw-bold mt-3">{{ feature.title }}</h6>
            <p class="text-muted">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    <!-- CTA -->
    <div class="container text-center my-5 py-5">
      <h2 class="fw-bold mb-3">Sẵn Sàng Tham Gia?</h2>
      <p class="text-muted mb-4">
        Hãy cùng chúng tôi xây dựng một hệ thống hiến máu thông minh, giúp cứu sống nhiều người hơn mỗi ngày
      </p>
      <a href="#" class="btn btn-danger btn-lg">Liên hệ ngay</a>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue"
import GoalCard from '../components/GoalCard.vue';
import FeatureCard from '../components/FeatureCard.vue';


const showAlert = ref(true)
const visible = ref(true)

const closeAlert = () => {
  visible.value = false
}

const goals = [
  { icon: 'fa-diagram-project', title: 'Nền Tảng Kết Nối', text: 'Xây dựng nền tảng quản lý hiến máu và kết nối bệnh viện' },
  { icon: 'fa-calendar-check', title: 'Đăng Ký & Đặt Lịch', text: 'Đăng ký, đặt lịch, theo dõi lịch sử hiến máu dễ dàng' },
  { icon: 'fa-database', title: 'Quản Lý Tồn Kho', text: 'Quản lý tồn kho máu, thông tin người hiến, chiến dịch' },
  { icon: 'fa-comments', title: 'Liên Lạc Thời Gian Thực', text: 'Kết nối và trao đổi thông tin nhanh chóng, hiệu quả' },
  { icon: 'fa-shield-halved', title: 'An Toàn & Bảo Mật', text: 'Minh bạch, an toàn, bảo mật thông tin người dùng' },
  { icon: 'fa-users', title: 'Trải Nghiệm Tối Ưu', text: 'Tăng sự tiện lợi, tin cậy và trải nghiệm người dùng' }
]
const features = [
  { icon: 'fa-calendar-check', title: 'Đăng Ký & Đặt Lịch', text: 'Đăng ký tài khoản và đặt lịch hiến máu một cách nhanh chóng, thuận tiện' },
  { icon: 'fa-database', title: 'Quản Lý Tồn Kho Máu', text: 'Theo dõi và quản lý tồn kho máu theo thời gian thực tại các bệnh viện' },
  { icon: 'fa-comments', title: 'Liên Lạc Trực Tuyến', text: 'Kết nối trực tiếp giữa người hiến máu, bệnh viện và ngân hàng máu' },
  { icon: 'fa-clock-rotate-left', title: 'Theo Dõi Lịch Sử', text: 'Lưu trữ và theo dõi lịch sử hiến máu chi tiết của từng người dùng' }
]
</script>

<style scoped>
.alert-bar {
  background: linear-gradient(90deg, #b91c1c, #dc2626);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  font-size: 14px;
}

.alert-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
}

.alert-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-register {
  background: #fff;
  color: #b91c1c;
  border: none;
  border-radius: 20px;
  padding: 6px 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
}

.btn-register:hover {
  background: #f8d7da;
}

.btn-close {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.goals-section {
  padding: 60px 20px;
}

.goal-card {
  display: flex;
  align-items: flex-start;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.5s ease;
  height: 100%;
  
}

.goal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}

.goal-icon {
  background: #dc3545;
  color: #fff;
  padding: 12px;
  border-radius: 8px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.goal-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.goal-text {
  color: #6c757d;
  font-size: 16px;
  margin: 0;
}

.features-section {
  background: #f8f9fa;
}

.underline {
  width: 60px;
  height: 4px;
  background: #dc3545;
  margin: 12px auto;
  border-radius: 2px;
}

.feature-card {
  background: #fff;
  border-radius: 10px;
  padding: 25px 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: #f8d7da;
  color: #dc3545;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 24px;
}
</style>



