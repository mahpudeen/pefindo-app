<template>
    <div class="q-pa-md jarak">
        <div style="height:40px"/>

        <div class="row items-center">
             <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-h5 text-bold">Model</div> </div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <q-icon size="20px" name="home" color="secondary"/></div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-body1 text-bold text-secondary"> - </div> </div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-subtitle2 text-bold text-secondary">Model</div> </div>
            <div class="col"/>
            <div class="col-auto"> 
                <q-btn  unelevated rounded color="secondary" 
                label="Input New Model" icon="add_circle_outline" 
                @click="$router.replace('input_new_model')"/>
                </div>
            
        </div>
        
        <div style="height:23px"/>

        <div class="row justify-left">
        
        <div class="col-4 q-gutter-lg padding">
            <q-card>
                <div class="column items-center">
                    <div style="height:10px"/>
                    <div class="col-6">
                        <q-icon name="card_travel" size="90px" color="secondary"/>
                    </div>
                    <div style="height:15px"/>
                    <div class="col-1">
                        <div class="text-negative text-h7 text-bold">E-Commerce</div>
                    </div>
                    <div style="height:15px"/>
                    <div class="col-1">
                        <div class="q-gutter-sm">
                            <q-btn size="13px" color="deep-purple-6" text-color="white" label="View" @click="$router.replace('view')"/>
                            <q-btn size="13px" color="orange-10" text-color="white" label="Edit" @click="$router.replace('edit')"/>
                            <q-btn size="13px" color="cyan-6" text-color="white" label="Delete"/>
                        </div>
                    </div>
                    <div style="height:15px"/>
                </div>
            </q-card>
        </div>        
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.jarak
    margin-left: 3%

.padding
    padding: 15px
</style>