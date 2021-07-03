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
        <div class="form-search-top__select_container" v-show="!showInput">
          <select
            name="city_search"
            class="search-select form-search-top__select"
          >
            <option value="">Москва</option>
            <option value="">Казань</option>
          </select>
        </div>
        <div class="form-search-top__select_container" v-show="!showInput">
          <select
            name="object_search"
            class="search-select form-search-top__select"
          >
            <option value="">Купить</option>
            <option value="">Продать</option>
          </select>
        </div>
        <div class="form-search-top__select_container" v-show="!showInput">
          <select
            name="type_search"
            class="search-select form-search-top__select"
          >
            <option value="">Офис</option>
            <option value="">Новостройка</option>
          </select>
        </div>
        <div class="form-search-top__input_container" v-show="showInput">
          <input
            type="text"
            v-model="form.search"
            class="form-search-top__input"
            placeholder="Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)"
          />
        </div>
        <button type="submit" class="search-button form-search-top__button">
          Найти
        </button>
        <div
          class="
            search-panels search-panels__price
            search-flex search-flex-space-between
          "
          v-if="panels.price.active"
        >
          <div
            class="search-panels__input search-flex search-flex-space-between"
          >
            <input
              type="text"
              class="search-panels__input-element"
              v-model="form.minPrice"
              placeholder="От"
            />
            <input
              type="text"
              class="search-panels__input-element"
              v-model="form.maxPrice"
              placeholder="До"
            />
            <select
              name=""
              class="search-panels__input-element"
              v-model="form.timePrice"
            >
              <option>₽/месяц</option>
              <option>₽/год</option>
            </select>
          </div>
          <div class="search-panels__button">
            <search-panel-button @click="showPanel"
              >Добавить метраж</search-panel-button
            >
          </div>
        </div>
        <div
          class="
            search-panels search-panels__metric
            search-flex search-flex-space-between
          "
          v-if="panels.metric.active"
        >
          <div class="search-panels__button">
            <search-panel-button @click="showPanel"
              >Добавить цену</search-panel-button
            >
          </div>
          <div
            class="search-panels__input search-flex search-flex-space-between"
          >
            <input
              type="text"
              class="search-panels__input-element"
              v-model="form.minMetric"
              placeholder="От"
            />
            <input
              type="text"
              class="search-panels__input-element"
              v-model="form.maxMetric"
              placeholder="До"
            />
            <div class="search-panels__input-text">м<sup>2</sup></div>
          </div>
        </div>
      </div>
      <div
        class="
          form-search-bottom
          search-flex search-flex-space-between search-flex-wrap
        "
      >
        <div class="search-flex-1">
          <search-radio v-model="showInput">
            <template #unchecked>Основной поиск</template>
            <template #checked>Искать по названию</template>
          </search-radio>
          <span></span>
        </div>
        <div class="search-flex-1 search-align-right">
          <search-icon-button
            v-for="(panel, index) in panels"
            :key="index"
            v-model="panel.active"
            >{{ panel.label }}
          </search-icon-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import searchRadio from "@/components/search/components/search_radio";
import searchIconButton from "@/components/search/components/search_icon_button";
import searchPanelButton from "@/components/search/components/search_panel_button";

export default {
  name: "search",
  components: {
    searchRadio,
    searchIconButton,
    searchPanelButton,
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
  },
  mounted() {},
  methods: {
    showPanel(name) {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "search_component";
</style>
