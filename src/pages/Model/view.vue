<template>
    <div class="q-pa-md jarak">
        <div style="height:40px"/>

        <div class="row items-center">
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-h5 text-bold">Model</div> </div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <q-icon size="20px" name="home" color="secondary"/></div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-body1 text-bold text-secondary"> - </div> </div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-subtitle2 text-bold text-secondary">Model</div> </div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-body1 text-bold text-secondary">-</div> </div>
            <div class="col-1 q-gutter-xl"/><div class="col-auto"> <div class="text-subtitle2 text-bold text-negative">Model Detail</div> </div>
        </div>
    

    <div style="height:23px"/>

    <q-card>
            <div class="row justify-center">
                <div class="col-11">
                    <div class="column">
                        <div style="height:20px"/>
                        <div class="col-1">
                            <div class="text-h6 text-secondary text-bold">Model E-Commerce</div>
                        </div>
                        
                        <div style="height:10px"/>
                        
                        <div class="col-1">
                            <q-separator color="negative" />
                        </div>
                        
                        <div style="height:15px"/>

                        <div class="col-1">
                            <div class="row items-center">
                                <div class="col-auto"><div class="text-center text-body2 text-bold">Show</div></div>
                                <div class="col-auto"> <q-input  borderless type="number" v-model="entries"  lazy-rules 
                                :rules="[ val => val !== null && val !== '0' || 'Please Insert Jumlah']"/></div>
                                <div class="col-auto" ><div class="text-right text-body2 text-bold">Entries</div></div>
                                <div class="col"/>
                                <div class="col-auto">
                                    <div class="text-body2  ">Search:</div>
                                </div>
                                <div class="col-auto">
                                    <q-input  outlined=""  v-model="search" input-class="text-right" class="q-ml-md">
                                        <template v-slot:append>
                                            <q-icon size="25px" name="search" @click="findByName()" />
                                        </template>
                                    </q-input>
                                </div>
                            </div>
                        </div>

                        <div style="height:15px"/>

                        <q-list bordered class=" bg-white text-white text-overline">
                        <q-item class="bg-positive text-black">
                        <q-item-section avatar top class="col-2 text-center" style="align : center">
                            <q-item-label class="q-mt-sm">PARAMETER</q-item-label>
                        </q-item-section>

                        <q-item-section top class="col-3 text-center" style="align : center">
                            <q-item-label class="q-mt-sm">LABEL</q-item-label>
                        </q-item-section>

                        <q-item-section top class="col-2  text-center" style="align : center">
                            <q-item-label class="q-mt-sm flex flex-center">DATA TYPE</q-item-label>
                        </q-item-section>             
                        
                        <q-item-section top class="col-2 " style="align : center">
                            <q-item-label class="q-mt-sm ">IS WEB</q-item-label>
                        </q-item-section>

                        <q-item-section top class="col-3">
                            <q-item-label class="q-mt-sm ">ACTION</q-item-label>
                        </q-item-section>
                        </q-item>

                        <q-item v-for="(formbaju, index) in frombajus" :key="formbaju.id" class="bg-grey-3 text-black" line="1">
                        <q-item-section avatar top class="col-2 text-center" style="align : center">
                            <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
                        </q-item-section>

                        <q-item-section top class="col-3 text-center" style="align : center">
                            <q-item-label class="q-mt-sm">{{formbaju.KodeApparel}}</q-item-label>
                        </q-item-section>

                        <q-item-section top class="col-2 text-center" style="align : center">
                            <q-item-label class="q-mt-sm">{{formbaju.NamaApparel}}</q-item-label>
                        </q-item-section>

                        

                        <q-item-section top class="col-2 text-center" style="align : center">
                            <q-item-label class="q-mt-sm">{{formbaju.StockApparel}}</q-item-label>
                        </q-item-section>
                        

                        <q-item-section top class="col-3">
                            <div class="q-mt-sm flex flex-center" style="align : right">
                            <q-btn class="gt-xs" size="12px" flat dense round icon="Edit"  @click="edit()" />
                            <q-btn class="gt-xs" size="12px" flat dense round icon="Delete" @click="onDelete()" />
                            <q-btn class="gt-xs" size="12px" flat dense round icon="View Logic"  @click="viewlogic()" />

                            </div>
                        </q-item-section>
                        </q-item>
                    </q-list>
                    <div style="height:20px"/>
                    </div>
                </div>
            </div>
    </q-card>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>

</style>