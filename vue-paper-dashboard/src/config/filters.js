import Vue from 'vue';

export function initFilters() {
    Vue.filter('status', value => {
       if (value == null) {
           return 'Non Available';
       }
       return 'Available';
    });
}
