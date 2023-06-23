<template>
  <div class="about-card">
    <div class="row">
      <div class="col-md-6">
        <div class="about-text">
          <h2 class="about-title">About Our Shoe Sales Company</h2>
          <p>
            Our company was born out of a passion for quality shoes and a desire to enhance everyday comfort. We embarked on our
            journey in 2021 and have since been committed to providing our customers with superior quality shoes, chosen with care
            and attention. Customer satisfaction is our top priority, and we work tirelessly to ensure that every shopping experience
            on our website is enjoyable and hassle-free. We are thrilled to share our passion for shoes with you and hope that you
            will appreciate our products as much as we love selecting them for you.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="image-container">
          <img class="card-img-top" :src="require(`@/assets/img/450/imagshoes.webp`)" alt="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .about-card {
    margin-left: 300px;
    margin-right: 300px;
    background-color: #ece1e1;
    text-align: center;
    padding: 20px;
  }

  .about-title {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .about-text {
    font-size: 20px;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .card-img-top {
    max-width: 100%;
    max-height: 100%;
  }
</style>
