<template>
  <div class="companyContent fade-up">
    <div class="companyHeader">
      <div class="companyLogo">
        <img :src="company.logo" />
      </div>
      <div class="companyName">
        <h2>{{ company.name }}</h2>
        <div class="companyLocation">
          <span class="locationIcon"></span>
          <p class="location">{{ company.location }}</p>
        </div>
      </div>
    </div>
    <div class="companyDescription">
      <p class="description">
        {{ company.description }}
        <a class="viewMore">View More...</a>
      </p>
    </div>
    <div class="companyInformations">
      <div class="activities">
        <div class="title">
          <h5>ACTIVITIES</h5>
        </div>

        <div class="activity" v-for="(activity, index) in this.company.activities" :key="index">
          
          <p class="time">{{ activity.num_days }} {{ activity.num_days > 1 ? "days" : "day" }} ago</p>
          
          <img class="activityLogo" :src="activity.logo" />
          
          <p class="activityDescription">
            <a class="name">{{ activity.name ? activity.name : company.name }}</a>
            {{ activity.action }}
            <br />
           
            <a class="stripe">{{ activity.name ? company.name : ''}}</a>
            {{ activity.on ? "on" : ''}}
            
            <a
              class="properties"
            >{{ activity.num_properties != 0 ? activity.num_properties : "" }} {{ activity.num_properties > 1 ? "properties" : activity.num_properties == 1 ? "property" : activity.product }}</a>
          </p>
        </div>
      </div>
      <div class="otherContents">
        <div class="similarCompanies card">
          <div class="title">
            <h5>SIMILAR COMPANIES</h5>
          </div>
          <div class="similarCompany" 
                v-for="(similarCompany, index) in company.similarCompanies"
                :key="index">
            <div class="similarLogo">
              <img :src="similarCompany.logo">
            </div>
            <div class="similarName">
              <a class="name"> {{ similarCompany.name }} </a>
            </div>
          </div>
        </div>
        <div class="companySpendHistoryGraph card">
          <div class="title">
            <h5>Company Spend History</h5>
          </div>
          <div class="companyGraph"></div>
        </div>
        <div class="companySpendHistory card">
          <div class="title">
            <h5>Company Spend History</h5>
          </div>
          <div class="companySpend"
                v-for="(companySpend, index) in company.companySpendHistory"
                :key="index">

            <div class="spendHistoryLogo">
              <img :src="companySpend.logo">
            </div>
            <div class="spendCompany">
              <div class="companyName">
                <a> {{ companySpend.name }} </a>
              </div>
              <div class="companyMoneySpend">
                <p>{{ company.name }}  {{ companySpend.message }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: {
        logo: require("../images/CompanyPage/squares@3x.png"),
        name: "Microsoft",
        location: "Redmond, WA USA",
        description:
          "At Microsoft, our mission is to empower every person and every organization\n\
            on the planet to achieve more. Our mission is grounded in both the world\n\
            in which we live and the future we strive to create.",
        activities: [
          {
            logo: require("../images/CompanyPage/video-platform.png"),
            name: "Cloud Ochestration",
            action: "replaced",
            num_properties: "1",
            num_days: "08",
            on: true
          },
          {
            logo: require("../images/CompanyPage/content-delivery.png"),
            name: "Express Scripts",
            action: "replaced",
            num_properties: "1",
            num_days: "10",
            on: true
          },
          {
            logo: require("../images/CompanyPage/waf-d-dos-security.png"),
            name: "Kaiser Permanente",
            action: "replaced",
            num_properties: "1",
            num_days: "12",
            on: true
          },
          {
            logo: require("../images/CompanyPage/traffic-management.png"),
            name: "Molina Healthcare",
            action: "replaced",
            num_properties: "1",
            num_days: "14",
            on: true
          },
          {
            logo: require("../images/CompanyPage/dns.png"),
            name: "Express Scripts",
            action: "replaced",
            num_properties: "1",
            num_days: "15",
            on: true
          },
          {
            logo: require("../images/CompanyPage/performance-monitoring.png"),
            name: "Kaiser Permanente",
            action: "replaced",
            num_properties: "1",
            num_days: "16",
            on: true
          },
          {
            logo: require("../images/CompanyPage/saas.png"),
            name: "Molina Health",
            action: "replaced",
            num_properties: "1",
            num_days: "17",
            on: true
          },
          {
            logo: require("../images/CompanyPage/video-platform.png"),
            name: "",
            action: "lauched",
            num_properties: "0",
            product: "M-Cloud",
            num_days: "18",
            on: false
          }
        ],
        similarCompanies: [
          {
            logo: require("../images/CompanyPage/group-6@2x.png"),
            name: "Amazon Web Services (AWS)"
          },
          {
            logo: require("../images/CompanyPage/fill-1@2x.png"),
            name: "Oracle Corporation"
          }
        ],
        companySpendHistory: [
          {
            name: "Google Cloud Plataform",
            logo: require("../images/CompanyPage/google-cloud@2x.png"),
            message: "spend on product $500,000"
          },
          {
            name: "CenturyLink CDN",
            logo: require("../images/CompanyPage/group-copy-2@2x.png"),
            message: "spend on product $300,000"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.companyContent {
  display: flex;
  flex-direction: column;
  width: 730px;
  margin: 65px 0 0 30px;

  .companyHeader {
    display: flex;

    .companyLogo {
      width: 70px;
      height: 70px;
      border-radius: 8px;
      box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.1);
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        transform: scale(0.4);
      }
    }

    .companyName {
      margin-left: 30px;
      margin-top: 5px;

      h2 {
        margin: 0 !important;
      }
      .companyLocation {
        margin-top: 20px;

        .locationIcon {
          background-image: url("../images/CompanyPage/location@3x.png");
          height: 15px;
          width: 10px;
          background-size: 10px;
          background-repeat: no-repeat;
          display: inline-block;
          margin-right: 5px;
        }
        .location {
          margin: 0 !important;
          display: inline-block;
        }
      }
    }
  }

  .companyDescription {
    .description {
      line-height: 25px;
    }

    .viewMore {
      text-decoration: underline;
      color: #7780aa;
      cursor: pointer;
    }
  }
  .companyInformations {
    display: flex;

    .activities {
      display: flex;
      flex-direction: column;
      border: 1px solid #d4d9e3;
      width: 380px;
      background: #ffffff;
      border-radius: 7px;

      .activity {
        display: flex;
        border-bottom: 1px solid #d4d9e3;
        align-items: center;
        margin-left: 10px;

        &:last-child {
          border-bottom: none;
        }

        .time,
        .activityLogo {
          margin-right: 15px;
        }

        .name,
        .properties {
          color: #5d699a;
          cursor: pointer;
        }

        .stripe,
        .time {
          color: #a9a9a9;
        }

        .stripe {
          text-decoration: line-through;
        }
      }
    }
  }

  .otherContents {
    display: flex;
    flex-direction: column;
    margin-left: 25px;

    .similarCompanies {
    
      .similarCompany {
        display: flex;
        align-items: center;
        margin: 15px;

        .similarName {
          margin-left: 10px;

          a {
            color: #5d699a;
            cursor: pointer;
          }
        }
      }
    }

  }

  .companySpendHistory {
    display: flex;
    flex-direction: column;
    
    .companySpend {
      display: flex;
      margin: 15px 0 0 15px;

      &:last-child {
        margin: 15px 0 15px 15px;
      }
    
    .spendCompany {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;

      .companyName {
        a {
           color: #5d699a;
           cursor: pointer;
        }
      }

      p {
        margin: 5px 0 0 0 !important;
        font-size: 14px;
      }
    }
    }
  }
  .card {
    background-color: #ffffff;
    width: 320px;
    border-radius: 7px;
    border: 1px solid #d4d9e3;
  }

  .card:not(:first-child) {
    margin-top: 25px;
  }

  .title {
    border-bottom: 1px solid #d4d9e3;
    height: 50px;
    display: flex;
    align-items: center;
    
    h5 {
      margin-left: 20px !important;
    }
  }

  .similarLogo,
  .spendHistoryLogo {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
    display: flex;

    img {
      transform: scale(.5);
    } 
  }
}
</style>