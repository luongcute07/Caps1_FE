<template>
  <!-- Goals Section -->
  <div class="card border-0 bg-light">
    <div class="card-body text-center">
      <h2 class="fw-bold">Mục Tiêu</h2>
      <p class="text-muted">Xây dựng hệ thống hiến máu toàn diện và hiệu quả</p>
    </div>
    <div class="row g-4 px-4 pb-4">
      <GoalCard
        icon="fa-diagram-project"
        title="Nền Tảng Kết Nối"
        text="Xây dựng nền tảng quản lý hiến máu và kết nối bệnh viện"
      />
      <GoalCard
        icon="fa-calendar-check"
        title="Đăng Ký & Đặt Lịch"
        text="Đăng ký, đặt lịch, theo dõi lịch sử hiến máu dễ dàng"
      />
      <GoalCard
        icon="fa-database"
        title="Quản Lý Tồn Kho"
        text="Quản lý tồn kho máu, thông tin người hiến, chiến dịch"
      />
      <GoalCard
        icon="fa-comments"
        title="Liên Lạc Thời Gian Thực"
        text="Kết nối và trao đổi thông tin nhanh chóng, hiệu quả"
      />
      <GoalCard
        icon="fa-shield-halved"
        title="An Toàn & Bảo Mật"
        text="Minh bạch, an toàn, bảo mật thông tin người dùng"
      />
      <GoalCard
        icon="fa-users"
        title="Trải Nghiệm Tối Ưu"
        text="Tăng sự tiện lợi, tin cậy và trải nghiệm người dùng"
      />
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue"

const GoalCard = defineComponent({
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
  },
  template: `
    <div class="col-md-4">
      <div class="d-flex p-3 bg-light rounded shadow-sm h-100">
        <div class="me-3 mt-2">
          <span class="bg-danger text-white p-3 rounded">
            <i :class="'fa-solid ' + icon + ' fa-lg'"></i>
          </span>
        </div>
        <div>
          <h6 class="fw-bold mb-1">{{ title }}</h6>
          <p class="text-muted mb-0">{{ text }}</p>
        </div>
      </div>
    </div>
  `,
})
</script>
