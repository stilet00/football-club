import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
import { Bar } from "react-chartjs-2";
import "./Statistics.css";
import Media from "react-media";
import { useDataBase } from "../../shared/hooks/useDataBase";
import { Player } from "../../shared/interfaces/player";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export interface ChartData {
  labels: Array<string>;
  datasets?: Array<any>;
}

function Statistics() {
  const classes = useStyles();

  const { players } = useDataBase();

  const { t } = useTranslation();

  const [category, setCategory] = useState<keyof Player>("gamesPlayed");

  const [data, setData] = useState<ChartData>({
    labels: [...players.map((item: Player) => item.name)],
  });

  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (value: number) {
            const additionalText =
              category === "price"
                ? "$."
                : category === "timeOnField"
                ? "hrs."
                : "points.";
            return `${value} + ${additionalText}`;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: t("statistics." + category),
      },
    },
    responsive: true,
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    setData({
      ...data,
      datasets: [
        {
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
          data: [...players.map((item: Player) => item[category])],
          label: t("statistics." + category),
          borderRadius: 5,
        },
      ],
    });
  }, [category, data, players, t]);

  return (
    <div className={"main-chart-container"}>
      <FormControl variant="outlined" className={classes.formControl} fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          id="demo-simple-select-outlined"
          value={category}
          onChange={handleChange}
          label="Category"
        >
          <MenuItem value={"gamesPlayed"} selected>
            {t("table.gamesPlayed")}
          </MenuItem>
          <MenuItem value={"timeOnField"}>
            {t("statistics.timeOnField")}
          </MenuItem>
          <MenuItem value={"goals"}>{t("statistics.goals")}</MenuItem>
          <MenuItem value={"price"}>{t("statistics.price")}</MenuItem>
        </Select>
      </FormControl>
      <div className="chart-container">
        <Media
          query="(max-width: 500px)"
          render={() => (
            <Bar data={data} options={options} width={100} type={""} />
          )}
        />
        <Media
          query="(min-width: 501px)"
          render={() => (
            <Bar data={data} options={options} width={undefined} type={""} />
          )}
        />
      </div>
    </div>
  );
}

export default Statistics;
