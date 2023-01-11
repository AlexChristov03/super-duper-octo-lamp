const { createApp } = Vue;

const myApp = {
  data() {
    return {
      immos: [],
      price: '',
      id: '',
    };
  },
  methods: {
    async loadData() {
      const { data } = await axios.get('/immos');
      this.immos = data;
    },
    async delImmo(id) {
      await axios.delete(`/immos/${id}`);
      this.loadData();
    },
    cpyImmoPrice({ id, price }) {
      this.id = id;
      this.price = price;
    },
    async changeImmo(){
      await axios.patch(`/immos/${this.id}`, { price: this.price });
      this.loadData();
    },
  },
};

createApp(myApp).mount('#app');
