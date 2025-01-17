import { Grid } from "@mui/material";
import { AreaChart } from "@tremor/react";
import { useSelector } from "react-redux";

const chartdata = [
  {
    date: "Jan 22",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 22",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 22",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 22",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 22",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 22",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 22",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 22",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 22",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 22",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 22",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 22",
    SolarPanels: 3239,
    Inverters: 3736,
  },
];

const dataFormatter = (number) =>
  `€${Intl.NumberFormat("de").format(number).toString()}`;

export default function Charts() {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales.map((sale) => ({
    date: new Date(sale.createdAt).toLocaleString(),
    sale: sale.amount,
  }));
  const purchasesData = purchases.map((purchase) => ({
    date: new Date(purchase.createdAt).toLocaleString(),
    purchase: purchase.amount,
  }));

  return (
    <Grid container spacing={2} mt={3}>
      <Grid item xs={12} md={6}>
        <AreaChart
          className="h-80"
          data={salesData}
          index="date"
          categories={["sale"]}
          colors={["indigo"]}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <AreaChart
          className="h-80"
          data={purchasesData}
          index="date"
          categories={["purchase"]}
          colors={["fuchsia"]}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
        />
      </Grid>
    </Grid>
  );

  //   return [
  //     <AreaChart
  //       className="h-80"
  //       data={salesData}
  //       index="date"
  //       categories={['sale']}
  //       colors={['indigo', 'rose']}
  //       valueFormatter={dataFormatter}
  //       yAxisWidth={60}
  //       onValueChange={(v) => console.log(v)}
  //     />,
  //     <AreaChart
  //       className="h-80"
  //       data={purchasesData}
  //       index="date"
  //       categories={['purchase']}
  //       colors={['indigo', 'rose']}
  //       valueFormatter={dataFormatter}
  //       yAxisWidth={60}
  //       onValueChange={(v) => console.log(v)}
  //     />
  // ]
}
