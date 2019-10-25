<template>
  <div class="companyContent">
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

            <div class="activity" 
                v-for="(activity, index) in this.company.activities"
                :key="index">

                <p class="time"> {{ activity.num_days }} {{ activity.num_days > 1 ? "days" : "day" }} ago</p>
                <img class="activityLogo" :src="activity.logo">
                <p class="activityDescription">
                    <a class="name">{{ activity.name ? activity.name : company.name }}</a> 
                        {{ activity.action }} 
                    <br>
                    <a class="stripe"> {{  activity.name ?  company.name : ''}}</a>
                        {{ activity.on ? "on" : ''}}
                    <a class="properties"> {{  activity.num_properties }} {{ activity.num_properties > 1 ? "properties" : "property" }} </a>        
                </p>

            </div>
        </div>
        <div class="otherContents">
            <div></div>
            <div></div>
            <div></div>
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
        activities:[
            {
                logo: require("../images/CompanyPage/video-platform.png"),
                name: "Cloud Ochestration",
                action: "replaced",
                num_properties: "1",
                num_days: "8",
                on: true
            },
            {
                logo: require("../images/CompanyPage/video-platform.png"),
                name: "Cloud Ochestration",
                action: "replaced",
                num_properties: "1",
                num_days: "8",
                on: true
            },
            {
                logo: require("../images/CompanyPage/video-platform.png"),
                name: "Cloud Ochestration",
                action: "replaced",
                num_properties: "1",
                num_days: "8",
                on: true
            },
            {
                logo: require("../images/CompanyPage/video-platform.png"),
                name: "Cloud Ochestration",
                action: "replaced",
                num_properties: "1",
                num_days: "8",
                on: true
            },
            {
                logo: require("../images/CompanyPage/video-platform.png"),
                name: "Cloud Ochestration",
                action: "replaced",
                num_properties: "1",
                num_days: "8",
                on: true
            },
            {
                logo: require("../images/CompanyPage/video-platform.png"),
                name: "Cloud Ochestration",
                action: "replaced",
                num_properties: "1",
                num_days: "8",
                on: true
            },
            {
                logo: require("../images/CompanyPage/video-platform.png"),
                name: "Cloud Ochestration",
                action: "replaced",
                num_properties: "1",
                num_days: "8",
                on: true
            },
            {
                logo: require("../images/CompanyPage/video-platform.png"),
                name: "Cloud Ochestration",
                action: "replaced",
                num_properties: "2",
                num_days: "8",
                on: true
            },
        ]
      }
    };
  }
};
</script>

<style lang="scss">
body {
  background-color: #e7e9f3 !important;
}
</style>
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
        color: #7780AA;
        cursor: pointer;
    }
  }
  .companyInformations {
      display: flex;

    .activities {
        display: flex;
        flex-direction: column;
        border: 1px solid #D4D9E3;
        width: 380px;
        background: #FFFFFF;
        border-radius: 7px;

        .title {
            border-bottom: 1px solid #D4D9E3;

            h5 {
                margin-left: 20px !important;
            }
        }

        .activity {
            display: flex;
            border-bottom: 1px solid #D4D9E3;
            align-items: center;
            justify-content: center;

            &:last-child {
                border-bottom: none;
            }

            .time,
            .activityLogo {
                margin-right: 15px;
            }

            .name,
            .properties {
                color: #5D699A;
                cursor: pointer;
            }

            .stripe,
            .time {
                color: #A9A9A9;
            }

            .stripe {
                text-decoration: line-through;
            }
        }
    }
  }
}
</style>