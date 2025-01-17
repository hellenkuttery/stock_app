// 'use client';

import { Card } from '@tremor/react';
import { useSelector } from 'react-redux';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}



export default function KpiCards() {

    const {sales,purchases} = useSelector(state=>state.stock)
    const totalSales = sales.reduce((acc,sale)=> acc + sale.amount,0)
    const totalPurchases = purchases.reduce((acc,purchase)=> acc + purchase.amount,0)
    const totalCash = totalSales - totalPurchases

    const data = [
        {
          name: 'Sales',
          value: `€ ${totalSales}`,
          change: '+6.1%',
          color:"fuchsia"
        //   changeType: 'positive',
        },
        {
          name: 'Purchases',
          value: `€ ${totalPurchases}`,
          change: '+19.2%',
          color:"amber"
        //   changeType: 'positive',
        },
        {
          name: 'Cash',
          value: `€ ${totalCash}`,
          change: '-1.2%',
        color:"indigo"
        },
      ];

  return (
    <>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}   decoration="top"
          decorationColor={item.color}
    >
            <dd className="flex items-start justify-between">
              <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.value}
              </span>
              {/* <span
                className={classNames(
                  item.changeType === 'positive'
                    ? 'text-emerald-700 dark:text-emerald-500'
                    : 'text-red-700 dark:text-red-500',
                  'text-tremor-default font-medium',
                )}
              >
                {item.change}
              </span> */}
            </dd>
            <dt className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </dt>
          </Card>
        ))}
      </dl>
    </>
  );
}