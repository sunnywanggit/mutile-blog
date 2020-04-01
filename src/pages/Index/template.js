import blog from '@/api/blog.js'

export default {
  data(){
    return{
      // 所有博客数据
      blogs:[],
      // 博客总量
      total:0,
      // 当前所在页面
      page:1,

    }
  },
  created(){
    this.page = parseInt(this.$route.query.page ) || 1

    blog.getIndexBlogs({page:this.page})
      .then(res=>{
        // console.log(res);
        this.blogs = res.data
        // console.log(this.blogs);
        this.total = res.total
        // console.log(this.total);
        this.page = res.page
      })
  },
  methods:{
    onPageChange(newPage){
      blog.getIndexBlogs({page:newPage})
        .then(res=>{
          this.blogs = res.data
          this.total = res.total
          this.page = res.page
          this.$router.push({path:'/',query:{page:newPage}})
        })

    }
  }
}
