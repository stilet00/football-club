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
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function Statistics({ players }) {
  const { t } = useTranslation();
  const [category, setCategory] = useState(1);
  const [data, setData] = useState({
    labels: ["2021"],
    datasets: players.map(
      (item) =>
        (item = {
          backgroundColor:
            "#" + Math.floor(Math.random() * 16777215).toString(16),
          borderColor: item.backgroundColor,
          borderWidth: 1,
          data: [
            category === 1
              ? item.gamesPlayed
              : category === 2
              ? item.timeOnField
              : category === 3
              ? item.goals
              : item.price,
          ],
          label: `${item.name} ${item.surname}`,
          borderRadius: 5,
        })
    ),
  });
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins: {
      title: {
        display: true,
        text:
          category === 1
            ? t("table.gamesPlayed")
            : category === 2
            ? t("statistics.timeOnField") + ", hrs."
            : category === 3
            ? t("statistics.goals")
            : t("table.price"),
      },
    },
    responsive: true,
  };

  const classes = useStyles();
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  useEffect(() => {
    setData({
      ...data,
      datasets: players.map(
        (item) =>
          (item = {
            backgroundColor:
              "#" + Math.floor(Math.random() * 16777215).toString(16),
            borderColor: item.backgroundColor,
            borderWidth: 1,
            data: [
              category === 1
                ? item.gamesPlayed
                : category === 2
                ? item.timeOnField
                : category === 3
                ? item.goals
                : item.price,
            ],
            label: `${item.name} ${item.surname}`,
            borderRadius: 5,
          })
      ),
    });
  }, [category]);

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
          <MenuItem value={1} selected>
            {t("table.gamesPlayed")}
          </MenuItem>
          <MenuItem value={2}>{t("statistics.timeOnField")}</MenuItem>
          <MenuItem value={3}>{t("statistics.goals")}</MenuItem>
          <MenuItem value={4}>{t("table.price")}</MenuItem>
        </Select>
      </FormControl>
      <div className="chart-container">
        <Media
          query="(max-width: 500px)"
          render={() => <Bar data={data} options={options} width={"100px"} />}
        />
        <Media
          query="(min-width: 501px)"
          render={() => <Bar data={data} options={options} />}
        />
      </div>
    </div>
  );
}

export default Statistics;
