<template>
  <q-layout view="lHh Lpr lFf" class="bg-positive">
    <q-header  class="bg-white" style="height: 60px">
        
        <div class="row" style="height:10px"/>
        <div class="row items-center">
          <div class="col-auto"> <q-btn flat dense round color="black" @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" aria-label="Menu"/> </div>
          
            <div class="col-auto">
            <q-item>
              <q-item-section avatar>
                <q-icon size="30px" color="black" name="date_range"/>
              </q-item-section>
            </q-item>
            </div>

           <div class="col-auto">
            <q-item>
              <q-item-section>
                <div class="text-overline text-bold text-black">29.11.2019</div>
              </q-item-section>
            </q-item>
           </div>

           <div class="col-auto">
            <q-item>
              <q-item-section>
                <div class="text-overline text-bold text-secondary">12:00</div>
              </q-item-section>
            </q-item>
           </div>
          <div class="col"/>
          <div class="col-2">
            <div class="column">
              <div class="col-1"> <div class="text-right text-subtitle2 text-black text-bold">Nama Panjang</div></div>
              <div class="col-1"> <div class="text-right text-body2 text-red text-bold">Jabatan</div></div>
            </div> 
          </div> 
          <div class="col-1" style="width:40px">
            <q-icon color="black" size="40px" name="face"/>
          </div> 
        </div> 
      
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      
        <q-toolbar class="bg-accent">
        <div class="row items-center">
          <div class="col-1 q-gutter-sm"/>
          <div class="col-4">
             <q-img src="./statics/logo.png" class="logo"/> 
          </div>
          <div class="col-1 q-gutter-lg"/>
          <div class="col">
            <q-item-label header class="text-h5 text-bold text-secondary" >PEFINDO</q-item-label>
          </div>
        </div>
        </q-toolbar>
        
        <div class="column" style="height:30px"/>
      <div class="row">
        <div class="col-1 q-gutter-md"/>
        <div class="col">
          <q-list>
            <div class="text-white">
            
            <q-item clickable v-ripple @click="$router.replace('ScoringEngine')">
              <q-item-section avatar>
                <q-icon size="31px" name="data_usage" color="white"/>
              </q-item-section>

              <q-item-section>
                <div class="text-body1 text-bold">Scoring Engine</div>
              </q-item-section>
            </q-item> 

            <div style="height:20px"/>

            <q-item clickable v-ripple @click="$router.replace('Model')">
              <q-item-section avatar>
                <q-icon size="31px" name="dynamic_feed" color="white"/>
              </q-item-section>

              <q-item-section>
                <div class="text-body1 text-bold">Model</div>
              </q-item-section>
            </q-item> 
            
            <div style="height:20px"/>

            <q-item clickable v-ripple @click="$router.replace('')">
              <q-item-section avatar>
                <q-icon size="31px" name="dvr" color="white"/>
              </q-item-section>

              <q-item-section>
                <div class="text-body1 text-bold">Model Performance</div>
              </q-item-section>
            </q-item> 
            
            <div style="height:20px"/>

            <q-item clickable v-ripple @click="$router.replace('')">
              <q-item-section avatar>
                <q-icon size="31px" name="settings_applications" color="white"/>
              </q-item-section>

              <q-item-section>
                <div class="text-body1 text-bold">Profil Setting</div>
              </q-item-section>
            </q-item> 
            
            <div style="height:20px"/>

            <q-item clickable v-ripple @click="$router.replace('')">
              <q-item-section avatar>
                <q-icon size="31px" name="supervisor_account" color="white"/>
              </q-item-section>

              <q-item-section>
                <div class="text-body1 text-bold">Key User Management</div>
              </q-item-section>
            </q-item> 
            
            <div style="height:20px"/>
            
            <q-item clickable v-ripple @click="$router.replace('')">
              <q-item-section avatar>
                <q-icon size="31px" name="insert_chart" color="white"/>
              </q-item-section>

              <q-item-section>
                <div class="text-body1 text-bold">Server Monitoring</div>
              </q-item-section>
            </q-item> 

            </div>
          </q-list>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>


<style lang="sass" scoped>
.logo
  height: 35px
  width: 35px
</style>