<template>
    <div class="wrapper">
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Search V.1</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active">Search V.1</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row col-12 mb-2">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">By Title</h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    <form  ref="form" role="form" id="search-form" @submit.prevent="searchMovie">
                    <!-- <form  ref="form" role="form" id="search-form" > -->
                        <div class="card-body">
                            <div class ="form-row mb-2">
                                <div class="form-col">
                                    <label class="m-2" for="t">Title:</label>
                                </div>
                                <div class="form-col">
                                    <input v-model="title" type="text" id="t" name="t" class="form-control w-100">
                                </div>
                                <div class="form-col">
                                    <label class="m-2" for="y">Year:</label>
                                </div>
                                <div class="form-col">
                                    <input v-model.number="year" type="text" id="y" name="y" class="form-control w-100">
                                </div>
                                <div class="form-col">
                                    <label class="m-2" for="plot">Plot:</label>
                                </div>
                                <div class="form-col">
                                <select  v-model="plot" class ="form-control" name="plot">
                                    <option value="short">SHORT</option>
                                    <option value="full">FULL</option>
                                </select>
                                </div>
                                <div class="form-col">
                                    <label class="m-2" for="r">Response:</label>
                                </div>
                                <div class="form-col">
                                    <select v-model="response" name="r" class="form-control">
                                        <option selected value="json"  >JSON</option>
                                        <option value="xml">XML</option>
                                    </select>
                                </div>
                                <div class="form-col">
                                    <button id="search-by-title-button" type="submit" class="btn btn-primary ml-2" value="Submit">Search</button>
                                </div>
                                <div class="form-col">
                                    <button id="search-by-title-reset" type="reset" class="btn btn-primary ml-2">Reset</button>
                                </div>
                                <div class="form-col">
                                    <button id="search-by-title-save" type="save" class="btn btn-primary ml-2" @click="collectMovie">Save</button>
                                </div>
                            </div>
                            <div class ="form-row mb-2">
                                <!-- <h1>omdb colect</h1> -->

                                <section v-if="error" class="error-message">
                                    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
                                    {{ error.message }}
                                </section>

                                <section v-else>
                                    <div>res</div>
                                    
                                    <span 
                                            v-for="(movie,index) in $store.getters.movies" :key="index"
                                            class="movie bg-dark"
                                        >
                                        {{ movie }}
                                    </span>
                                    <!-- <span class="lighten">
                                        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
                                    </span> -->
                                </section>
                            </div>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <label class="sr-only" for="inlineFormInputName2">Request:</label>
                            <label class="sr-only" for="inlineFormInputName2">Response:</label>
                        </div>   
                         
                    </form>
                    </div><!-- /.card -->
                </div>
            </div><!-- /.container-fluid -->
        </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
        </aside>   
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Search1',
    data: function() {
        return {
            loginData: {},
            title:null,
            year:null,
            plot:'short',
            response:'json',
        }
    },
    computed: mapState({
        error: 'store'
    }),
    methods: {
        fetchMovie: function() {
            this.$store.dispatch("fetchMovie");

        },
        logIn: function() {
            this.$auth.loginWithRedirect();
        },
        submit: function(){
            const formData = new FormData(this.$refs['form']); // reference to form element
            const dataReq= {}; // need to convert it before using not with XMLHttpRequest
            for (let [key, val] of formData.entries()) {
                if((val != 'short')&&(val != 'json')&&(val != '')){
                        Object.assign(dataReq, { [key]: val })
                }
            }
        },
        searchMovie: function(){
            const payload = { t: this.title, y: this.year,  p: this.plot, r: this.response};
            console.log(payload)
            this.$store.dispatch("search", payload)
        },
        collectMovie: function(){
            const payload = { t: this.title, y: this.year,  p: this.plot, r: this.response};
            console.log(payload)
            this.$store.dispatch("search", payload)
        }
    },
}
</script>