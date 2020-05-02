<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Create Article</div>
          <div class="card-body">
            <div class="alert alert-danger" v-if="errors.length">
              <b>Terdapat kesalahan dalam input data:</b>
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </div>

            <form @submit.prevent="createCatatans">
              <div class="form-group">
                <label for="judul">Judul</label>
                <input type="text" class="form-control" id="judul" v-model="catatans.judul" />
              </div>
              <div class="form-group">
                <label for="isi">Isi</label>
                <textarea type="text" class="form-control" id="isi" v-model="catatans.isi" rows="5"></textarea>
              </div>
              <div class="form-group">
                <router-link to="/" class="btn btn-danger">Kembali</router-link>|
                <button class="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    catatans: {},
    errors: [],
    judul: null,
    isi: null
  }),

  methods: {
    createCatatans(e) {
      e.preventDefault();
      let uri = "/catatan/store";
      this.axios
        .post(uri, this.catatans)
        .then(res => {
          console.log(res);
          this.$swal.fire("Peringatan", "wajib diisi !", "OK");
          this.$swal({
            title: "Sukses",
            text: "data berhasil disimpan",
            icon: "success",
            timer: 1000
          });
          this.$router.push({ path: "/" });
        })
        .catch(err => {
          console.error(catatans);
        });

      return true;
    }

    //   this.errors = [];

    //   if (!this.judul || !this.isi) {
    //  //   this.$swal.fire('Peringatan', 'wajib diisi !', 'OK');
    //     this.$swal({
    //       title: "Kolom wajib diisi",
    //       text: "catatans created successfully",
    //       icon: "error",
    //       timer: 1000
    //     });
    //  }
  }
};
</script>