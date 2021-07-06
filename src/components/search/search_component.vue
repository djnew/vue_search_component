<template>
  <div class="search-wrapper search-wrapper__center">
    <form action="" @submit.prevent="submitForm">
      <div
        class="
          form-search-top
          search-flex
          search-flex-space-between
          search-flex-wrap
          search-background
        "
      >
        <div
          v-show="!showInput"
          class="
            form-search-top__select_block
            search-flex search-flex-space-between search-flex-wrap
          "
        >
          <search-form-select
            v-model="form.city"
            :options="['Москва', 'Сызрань']"
            class="form-search-divider"
          />
          <search-form-select
            v-model="form.type"
            :options="['Купить', 'Продать']"
            class="form-search-divider"
          />
          <search-form-select
            v-model="form.object"
            :options="['Офис', 'Новостройка']"
          />
        </div>
        <div v-show="showInput" class="form-search-top__input_container">
          <search-form-input
            v-model="form.search"
            placeholder="Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)"
          />
        </div>
        <search-form-button-submit />
        <div
          v-if="panels.price.active"
          class="
            search-panels search-panels__price
            search-flex search-flex-space-between search-flex-wrap
          "
        >
          <div
            class="
              search-panels__input
              search-flex search-flex-space-between search-flex-wrap
            "
          >
            <search-form-input
              v-model="form.minPrice"
              :is-number="true"
              class="form-search-divider"
              placeholder="От"
            />
            <search-form-input
              v-model="form.maxPrice"
              :is-number="true"
              class="form-search-divider"
              placeholder="До"
            />
            <search-form-select
              v-model="form.timePrice"
              :options="['₽/месяц', '₽/год']"
            />
          </div>
          <div class="search-panels__button">
            <search-form-button @click="showForm"
              >Добавить метраж
            </search-form-button>
          </div>
        </div>
        <div
          v-if="panels.metric.active"
          class="
            search-panels search-panels__metric
            search-flex search-flex-space-between search-flex-wrap
          "
        >
          <div class="search-panels__button">
            <search-form-button @click="showForm"
              >Добавить цену
            </search-form-button>
          </div>
          <div
            class="
              search-panels__input
              search-flex search-flex-space-between search-flex-wrap
            "
          >
            <search-form-input
              v-model="form.minMetric"
              :is-number="true"
              class="form-search-divider search-panels__input_element"
              placeholder="От"
            />
            <search-form-text-panel
              class="form-search-divider search-visible-small"
            >
              м<sup>2</sup></search-form-text-panel
            >
            <search-form-input
              class="search-panels__input_element"
              v-model="form.maxMetric"
              placeholder="До"
            />
            <search-form-text-panel> м<sup>2</sup></search-form-text-panel>
          </div>
        </div>
      </div>
      <div
        class="
          form-search-bottom
          search-flex search-flex-space-between search-flex-wrap
        "
      >
        <div class="search-flex-1 search-align-left">
          <search-form-radio v-model="showInput">
            <template #unchecked>Основной поиск</template>
            <template #checked>Искать по названию</template>
          </search-form-radio>
          <span></span>
        </div>
        <div v-if="!showInput" class="search-align-right">
          <search-form-icon-button
            v-for="(panel, index) in panels"
            :key="index"
            v-model="panel.active"
            >{{ panel.label }}
          </search-form-icon-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import searchFormRadio from "../universal/search_form_radio.vue";
import searchFormIconButton from "../universal/search_form_icon_button.vue";
import searchFormButton from "../universal/search_form_button.vue";
import searchFormSelect from "../universal/search_form_select.vue";
import searchFormInput from "../universal/search_form_input.vue";
import searchFormTextPanel from "../universal/search_form_text_panel.vue";
import searchFormButtonSubmit from "../universal/search_form_button_submit.vue";

export default {
  name: "SearchComponent",
  components: {
    searchFormRadio,
    searchFormIconButton,
    searchFormButton,
    searchFormSelect,
    searchFormInput,
    searchFormTextPanel,
    searchFormButtonSubmit,
  },
  data() {
    return {
      form: {
        search: "",
        minMetric: "",
        maxMetric: "",
        timePrice: "₽/месяц",
        minPrice: "",
        maxPrice: "",
        city: "Москва",
        object: "Купить",
        type: "Офис",
      },
      panels: {
        price: {
          label: "Цена",
          active: false,
        },
        metric: {
          label: "Метраж",
          active: false,
        },
      },
      showInput: false,
    };
  },
  watch: {
    "panels.price.active": function panelsPriceActive(val) {
      if (val) {
        this.panels.metric.active = !val;
      }
    },
    "panels.metric.active": function panelsPriceActive(val) {
      if (val) {
        this.panels.price.active = !val;
      }
    },
    showInput: function showInput(val) {
      if (val) {
        this.panels.price.active = false;
        this.panels.metric.active = false;
      }
    },
  },
  mounted() {},
  methods: {
    showForm(name) {
      console.log(typeof name, name);
      if (name) {
        for (let key in this.panels) {
          if (key === name) {
            this.panels[key].active = !this.panels[key].active;
          } else {
            this.panels[key].active = false;
          }
        }
      } else {
        for (let key in this.panels) {
          this.panels[key].active = !this.panels[key].active;
        }
      }
    },
    submitForm() {
      this.$emit("submit", this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "search_component";
</style>
