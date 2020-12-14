import axios from 'axios'
// 设置后端请求地址
axios.defaults.baseURL='http://192.168.1.74:9090/shiro'
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json'
// 携带凭证信息
axios.defaults.withCredentials = true

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
    config => {
      if (window.localStorage.getItem('token')) {
        config.headers.token = window.localStorage.getItem('token');
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    });
  
  // 添加响应拦截器，移除token
  axios.interceptors.response.use(
    response =>{
      return response;
    },
    error=>{
      if(error.response){
        switch(error.response.status){
          case 401:
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
      }
    })

/**
 * get方法，对应get请求
 * @param {Stringf} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
    })
  }
  
  /**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  export function post (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
    })
  }
  
  /**
   * del 方法，对应del 请求
   * @param {String} url [请求的url地址] 
   * @param {Object} params [请求时携带的参数] 
   */
  export function del (url, params) {
    return new Promise((resolve, reject) => {
      axios.delete(url, params).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
    })
  }

  export function sleep (method) {
    const start = Number(Date.now())
    return new Promise((resolve) => {
      (function selfRecursion () {
        setTimeout(() => {
          let flag
          if (typeof method === 'function') {
            flag = method()
          }
          if (typeof method === 'number') {
            flag = Number(Date.now()) - start < method
          }
          if (flag) {
            selfRecursion()
          } else {
            resolve()
          }
        }, 10)
      })()
    })
  }