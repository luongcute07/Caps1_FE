<template>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://healthylife.com/wfh/wp-content/uploads/2015/07/banner.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cloudfront-ap-southeast-2.images.arcpublishing.com/tvnz/PQSMVOET6RHL3OVEJ4WLDSEEFY.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cloudfront-ap-southeast-2.images.arcpublishing.com/tvnz/IXQLJFAVHFGHNMPZ3MOFCSAZTE.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- Đặt lịch / Tư vấn -->
  <div class="row mb-5" style="margin-top: -50px">
    <div class="col-lg-8 mx-auto">
      <div class="row">
        <div class="col-lg-6">
          <div
            class="card radius-10 border-bottom border-0 border-3 border-info p-2 shadow-sm"
          >
            <div class="card-body d-flex justify-content-between">
              <i class="fa-solid fa-phone-volume fa-4x text-primary"></i>
              <div class="ms-4 pe-5">
                <h5 class="fw-bold">Đặt lịch khẩn cấp</h5>
                <p>Liên hệ ngay để được tư vấn</p>
                <button class="btn btn-primary">
                  <i class="fa-solid fa-calendar ms-1"></i>Đặt lịch ngay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div
            class="card bg-primary radius-10 border-bottom border-0 border-3 border-info p-2 shadow-sm"
          >
            <div class="card-body d-flex justify-content-between">
              <i class="fa-solid fa-calendar fa-4x text-white"></i>
              <div class="ms-4 pe-5 text-white">
                <h5 class="fw-bold text-white">Tư vấn trực tuyến</h5>
                <p>Nhận tư vấn từ chuyên gia</p>
                <button class="btn btn-white">
                  <i class="fa-solid fa-comment ms-1"></i>Chat ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Giới thiệu -->
  <div class="container">
    <div class="card">
      <div class="card-container">
        <div class="row">
          <div class="col-lg-6">
            <img
              class="img-fluid"
              src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980723.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <h4 class="text-primary mt-4">
              <i class="fa-solid fa-plus fa-1x"></i>GIỚI THIỆU
            </h4>
            <h3 class="mt-3">
              Chăm Sóc Sức Khoẻ Toàn Diện Với Công Nghệ Tiên Tiến
            </h3>
            <p class="mt-3">
              Với hơn 20 năm kinh nghiệm trong lĩnh vực y tế, chúng tôi tự hào
              là địa chỉ tin cậy cho việc chăm sóc sức khỏe của bạn và gia đình.
              Đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại và quy
              trình khám chữa bệnh chuẩn quốc tế.
            </p>
            <hr class="my-4 border border-info opacity-100" />
            <div class="row">
              <div class="col-lg-6">
                <p class="fw-bold">
                  <i class="fa-solid fa-heart-pulse text-primary me-1"></i>50+
                  bác sĩ chuyên khoa
                </p>
                <p class="fw-bold">
                  <i class="fa-solid fa-tablet text-primary me-1"></i>Thiết bị y
                  tế hiện đại
                </p>
                <p class="fw-bold">
                  <i class="fa-solid fa-heart-pulse text-primary me-1"></i>Chứng
                  nhận JCI
                </p>
              </div>
              <div class="col-lg-6">
                <p class="me-5 fw-bold">
                  <i class="fa-solid fa-clock text-primary me-1"></i>Khám 24/7
                </p>
                <p class="me-5 fw-bold">
                  <i class="fa-solid fa-certificate text-primary me-1"></i>Bảo
                  hiểm y tế
                </p>
                <p class="me-5 fw-bold">
                  <i class="fa-solid fa-truck-medical text-primary me-1"></i>Cấp
                  cứu khẩn cấp
                </p>
              </div>
            </div>
            <button class="btn btn-primary margin-auto mt-2">
              <i class="fa-solid fa-right-long"></i>Khám phá thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Chuyên khoa -->
 <div class="container">
  <div class="row">
    <div class="col-lg-12">
      <div class="card bg-light-info">
        <div class="card-header">
          <div class="row">
            <div class="col-lg-12 d-flex justify-content-between align-items-center">
              <h4 class="fw-bold">Chuyên Khoa Đa Dạng, Chất Lượng Cao</h4>
              <button class="btn btn-primary mt-2">Xem thêm</button>
            </div>
            <p class="ms-3">
              Chúng tôi cung cấp đầy đủ các dịch vụ y tế từ cơ bản đến nâng cao
            </p>
          </div>
        </div>
        <div class="card-body">
          <div class="row d-flex justify-content-between align-items-center">
            <div
              class="col-lg-3 mb-4"
              v-for="(value, index) in list"
              :key="index"
            >
              <div class="card border-0 shadow-sm">
                <div class="d-flex align-items-center mt-3 px-3">
                  <img
                    :src="value.hinh_anh"
                    class="rounded-circle"
                    width="100"
                    height="100"
                  />
                  <h4 class="fw-bold ms-3">{{ value.ho_ten }}</h4>
                </div>
                <div class="px-3">
                  <p class="mt-3">
                    <i class="fa-solid fa-heart-pulse text-info me-1"></i>
                    {{ value.ten_chuyen_khoa }}
                  </p>
                  <p>{{ value.mo_ta_chuyen_khoa }}</p>
                  <button class="btn btn-outline-info w-100 mb-3">
                    Liên hệ tư vấn
                  </button>
                </div>
              </div>
            </div>
          </div> <!-- end row -->
        </div> <!-- end card-body -->
      </div> <!-- end card -->
    </div> <!-- end col -->
  </div> <!-- end row -->
</div> <!-- end container -->

  <!-- Bác sĩ -->
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-body">
          <div
            class="col-lg-12 d-flex justify-content-between align-items-center mt-2" 
          >
            <h4>Bác Sĩ Chuyên Gia Hàng Đầu</h4>
            <button class="btn btn-primary">Xem thêm</button>
          </div>
          <p class="mt-2">
            Đội ngũ bác sĩ giàu kinh nghiệm, được đào tạo chuyên sâu tại các
            bệnh viện uy tín
          </p>
          <div class="row g-4 mt-3">
            <div class="col-lg-4" v-for="(value, index) in list" :key="index">
            <div
              class="card border-primary border-top border-start border-3 border-0 h-100 w-100"
            >
              <img
                :src="value.hinh_anh"
                alt="Bác sĩ"
                class="rounded-circle d-block mx-auto mt-3"
                width="100"
                height="100"
              />
              <div class="bg-info bg-opacity-10 p-2 rounded mt-3">
                <b class="fw-bold"> Chuyên khoa:</b>
                <span class="fw-bold ms-1 text-info">{{ value.ten_chuyen_nganh }}</span>
                <p class="fw-bold mt-1">{{ value.so_nam_kinh_nghiem }} năm kinh nghiệm</p>
              </div>
              <h6 class="mt-2 ms-2">
                <i class="fa-solid fa-heart-pulse text-primary me-1"></i>{{ value.chuc_danh }}. <b>{{ value.ho_ten }}</b>
              </h6>
              <hr class="my-1 border border-grey opacity-50" />
              <p class="mt-2 ms-2 fw-bold">
                <i class="fa-solid fa-heart-pulse text-primary me-1"></i>{{ value.thanh_vien_to_chuc }}
              </p>
              <hr class="my-1 border border-grey opacity-50" />
              <p class="mt-2 ms-2 fw-bold">
                <i class="fa-solid fa-heart-pulse text-primary me-1"></i>{{ value.qua_trinh_dao_tao }}
              </p>
              <button class="btn btn-info w-100 mb-2">Đặt khám ngay</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Đặt lịch -->
  <div class="container">
    <div class="row">
      <div class="card bg-light-info">
        <div class="card-body">
          <h4 class="text-center mt-2">ĐẶT LỊCH KHÁM BỆNH</h4>
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <h4 class="mt-2 ms-2">
                  <i class="fa-solid fa-clock"></i> Giờ làm việc
                </h4>
                <p class="ms-2">
                  Chúng tôi phục vụ bệnh nhân với thời gian linh hoạt
                </p>
                <hr class="my-1 border border-grey opacity-50" />
                <div class="d-flex justify-content-between align-items-center">
                  <p class="fw-bold ms-3">Thứ 2 - Thứ 6:</p>
                  <p class="me-3">7:30 18:00</p>
                </div>
                <hr class="my-1 border border-grey opacity-50" />
                <div class="d-flex justify-content-between align-items-center">
                  <p class="fw-bold ms-3">Thứ 7:</p>
                  <p class="me-3">7:30 17:00</p>
                </div>
                <hr class="my-1 border border-grey opacity-50" />
                <div class="d-flex justify-content-between align-items-center">
                  <p class="fw-bold ms-3">Chủ Nhật:</p>
                  <p class="me-3 text-primary">8:00 - 12h:00</p>
                </div>
                <hr class="my-1 border border-grey opacity-50" />
                <div class="d-flex justify-content-between align-items-center">
                  <p class="fw-bold ms-3">Cấp cứu:</p>
                  <p class="me-3 text-primary">24/7</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="row">
                <div class="card">
                  <h4 class="fw-bold ms-3 mt-2">
                    <i class="fa-solid fa-calendar me-2 text-primary"></i>Đặt
                    lịch khám
                  </h4>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    class="form-control mt-3"
                  />
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    class="form-control mt-3"
                  />
                  <select
                    class="form-select mt-3"
                    aria-label="Chọn chuyên khoa"
                  >
                    <option selected>Chọn chuyên khoa</option>
                  </select>
                  <div class="d-flex mt-3">
                    <input type="date" class="form-control" />
                    <input type="time" class="form-control" />
                  </div>
                  <textarea
                    class="form-control mt-3"
                    rows="2"
                    placeholder="Ghi chú"
                  ></textarea>
                  <button class="btn btn-primary w-100">
                    <i class="fas fa-calendar-check me-2"></i>ĐẶT LỊCH NGAY
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-3">
              <div
                class="card h-100 d-flex justify-content-center align-items-center"
              >
                <img
                  src="https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg"
                  alt="Bác sĩ"
                  class="img-fluid"
                  style="max-height: 100%; object-fit: contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Đánh giá -->
  <div class="container my-5">
    <div class="row">
      <div class="card">
        <div class="card-body">
          <h4 class="text-center text-primary mt-4 fw-bold">
            ĐÁNH GIÁ TỪ BỆNH NHÂN
          </h4>
          <div class="row mt-4">
            <div class="col-lg-4">
              <div class="card bg-info p-3 h-100">
                <div class="d-flex align-items-center mb-2">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Bác sĩ"
                    class="rounded-circle me-2"
                    width="40"
                    height="40"
                  />
                  <div>
                    <strong>Nguyễn Thị Anh</strong><br />
                    <small class="text-muted">Bệnh nhân tim mạch</small>
                  </div>
                </div>
                <small class="mt-2"
                  >"Tôi rất hài lòng với dịch vụ khám bệnh tại đây. Bác sĩ rất
                  tận tâm và chuyên nghiệp. Quy trình khám bệnh nhanh chóng và
                  thuận tiện."</small
                >
                <div class="mt-4">
                  <span class="text-warning">★ ★ ★ ★ ★</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card bg-info p-3 h-100">
                <div class="d-flex align-items-center mb-2">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Bác sĩ"
                    class="rounded-circle me-2"
                    width="40"
                    height="40"
                  />
                  <div>
                    <strong>Nguyễn Thị Anh</strong><br />
                    <small class="text-muted">Bệnh nhân tim mạch</small>
                  </div>
                </div>
                <small class="mt-2"
                  >"Tôi rất hài lòng với dịch vụ khám bệnh tại đây. Bác sĩ rất
                  tận tâm và chuyên nghiệp. Quy trình khám bệnh nhanh chóng và
                  thuận tiện."</small
                >
                <div class="mt-4">
                  <span class="text-warning">★ ★ ★ ★ ★</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card bg-info p-3 h-100">
                <div class="d-flex align-items-center mb-2">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Bác sĩ"
                    class="rounded-circle me-2"
                    width="40"
                    height="40"
                  />
                  <div>
                    <strong>Nguyễn Thị Anh</strong><br />
                    <small class="text-muted">Bệnh nhân tim mạch</small>
                  </div>
                </div>
                <small class="mt-2"
                  >"Tôi rất hài lòng với dịch vụ khám bệnh tại đây. Bác sĩ rất
                  tận tâm và chuyên nghiệp. Quy trình khám bệnh nhanh chóng và
                  thuận tiện."</small
                >
                <div class="mt-4">
                  <span class="text-warning">★ ★ ★ ★ ★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Q/A -->
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-body">
          <div class="text-center">
            <h4 class="mt-4 text-primary">CÂU HỎI THƯỜNG GẶP</h4>
            <small class="text-center">Giải đáp thắc mắc của bạn</small>
          </div>
          <div class="row text-center">
            <div class="col-lg-10 mx-auto mt-3">
              <div class="d-flex justify-content-center">
                <div class="accordion" id="faqAccordion">
                  <!-- Câu hỏi 1 -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Làm thế nào để đặt lịch khám bệnh?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        Bạn có thể đặt lịch khám thông qua website, ứng dụng
                        hoặc gọi tổng đài hỗ trợ.
                      </div>
                    </div>
                  </div>

                  <!-- Câu hỏi 2 -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Chi phí khám bệnh như thế nào?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        Chi phí khám được niêm yết công khai theo từng chuyên
                        khoa.
                      </div>
                    </div>
                  </div>

                  <!-- Câu hỏi 3 -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Có dịch vụ khám ngoài giờ không?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        Chúng tôi có hỗ trợ khám bệnh ngoài giờ vào buổi tối và
                        cuối tuần.
                      </div>
                    </div>
                  </div>

                  <!-- Câu hỏi 4 -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Có cần mang gì khi đi khám bệnh?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        Bạn cần mang theo giấy tờ tùy thân và hồ sơ bệnh án nếu
                        có.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      search: {},
      list: [],
    };
  },
   mounted() {
    axios
      .post("http://127.0.0.1:8000/api/cau_1", this.search) // hoặc {} nếu không có search
      .then((res) => {
        this.list = res.data.data;
      })
      .catch((err) => {
        console.error("Lỗi gọi API:", err);
      });
  },
};
</script>
<style></style>