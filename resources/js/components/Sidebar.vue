<v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <!-- /* Аватар и данные в навбаре*/ -->
        <div class="profile__navbar" v-if="isLoggedIn">
          <v-avatar class="profile" color="grey" size="150" tile>
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="title"> {{ user.email }}</v-list-item-title>
            <v-list-item-subtitle>Должность</v-list-item-subtitle>
            <!-- Уровень -->
            <v-progress-linear 
              class="mt-4" 
              v-model="skill" 
              color="primary" 
              height="20" 
              striped
              >
                <template v-slot="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
            </v-progress-linear>

          </v-list-item-content>
        </div>

        <v-list-item link :to="'/rules'">
          <v-list-item-action>
            <v-icon>fa-book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Устав</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/culture'">
          <v-list-item-action>
            <v-icon>fa-users</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Культура</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/proposal'">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Предложения</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/shareExperience'">
          <v-list-item-action>
            <v-icon>fa-people-arrows</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Делимся опытом</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/questioning'">
          <v-list-item-action>
            <v-icon>fa-question-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Анкетирование</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/profile'">
          <v-list-item-action>
            <v-icon>fa-id-card</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Профиль</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/shop'">
          <v-list-item-action>
            <v-icon>fa-shopping-bag</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Магазин поощрений</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item link @click="logout">
          <v-list-item-action>
            <v-icon>fa-window-close</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Выйти</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>