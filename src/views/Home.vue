<template>
  <div class="home">
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">All catatan</div>
            <div class="card-body">
              <router-link to="/tambah" class="btn btn-primary">Tambah Catatan</router-link>
              <br />
              <br />
              <div class="table-responsive">
                <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th width="50" class="text-center">No</th>
                      <th>Judul</th>
                      <th width="200" class="text-center">Isi</th>
                      <th width="200" class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(catatan, index) in catatans" :key="catatan.id">
                      <td width="50" class="text-center">{{ index + 1 }}</td>
                      <td>{{ catatan.judul }}</td>
                      <td>{{ catatan.isi }}</td>
                      <td width="200" class="text-center">
                        <div class="btn-group">
                          <router-link
                            :to="{name: 'Show', params: { id: catatan.id }}"
                            class="btn btn-primary"
                          >Detail</router-link>
                          <router-link
                            :to="{name: 'edit', params: { id: catatan.id }}"
                            class="btn btn-success"
                          >Edit</router-link>
                          <button class="btn btn-danger" @click="deletePost(catatan.id)">Delete</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: () => ({
    catatans: []
  }),

  created() {
    console.log("get data catatans");
    this.axios
      .get("/catatans")
      .then(response => {
        this.catatans = response.data;
      })
      .catch(error => {
        let { responses } = error;
        console.log(responses);
      });
  },

  methods: {
    deletePost(id) {
      this.$swal
        .fire({
          title: "Apakah kamu yakin?",
          text: "Jika kamu hapus, maka data tidak akan kembali lagi.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Hapus",
          cancelButtonText: "Batal"
        })
        .then(result => {
          if (result.value) {
            this.$swal.fire({
              title: "Success!",
              text: "Catatan berhasil dihapus.",
              icon: "success",
              timer: 1000
            });
            let uri = "catatan/" + id;
            this.axios.delete(uri).then(response => {
              this.catatans.splice(this.catatans.indexOf(id), 1);
              console.log(response);
            });
            console.log("Deleted Catatan dengan id ..." + id);
          }
        });
    },
   
  },

  name: "Home",
  components: {}
};
</script>

