<template>
  <!-- Features -->
  <div class="container my-5">
    <div class="text-center mb-4">
      <h2 class="fw-bold">Tính Năng Nổi Bật</h2>
      <p class="text-muted">
        Những tính năng đặc biệt giúp tối ưu hóa quy trình hiến máu
      </p>
    </div>
    <div class="row g-4">
      <FeatureCard
        icon="fa-calendar-check"
        title="Đăng Ký & Đặt Lịch"
        text="Đăng ký tài khoản và đặt lịch hiến máu nhanh chóng, thuận tiện"
      />
      <FeatureCard
        icon="fa-database"
        title="Quản Lý Tồn Kho Máu"
        text="Theo dõi và quản lý tồn kho máu theo thời gian thực tại các bệnh viện"
      />
      <FeatureCard
        icon="fa-comments"
        title="Liên Lạc Trực Tuyến"
        text="Kết nối trực tiếp giữa người hiến máu, bệnh viện và ngân hàng máu"
      />
      <FeatureCard
        icon="fa-clock-rotate-left"
        title="Theo Dõi Lịch Sử"
        text="Lưu trữ và theo dõi lịch sử hiến máu chi tiết của từng người dùng"
      />
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue"

const FeatureCard = defineComponent({
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
  },
  template: `
    <div class="col-md-3">
      <div class="card shadow-sm border-0 h-100">
        <div class="card-body text-center">
          <i :class="'fa-solid ' + icon + ' fa-2x text-danger mb-3'"></i>
          <h6 class="fw-bold">{{ title }}</h6>
          <p class="text-muted">{{ text }}</p>
        </div>
      </div>
    </div>
  `,
})
</script>
