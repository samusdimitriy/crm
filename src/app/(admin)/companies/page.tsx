import React from 'react';
import Header from '../../components/header';
import AddCompanyButton from '../../components/add-company-button';
import Toolbar from '../../components/toolbar';
import SearchInput from '../../components/search-input';
import CompanyTable from '../../components/company-table';
import CompanyRow from '../../components/company-row';
import { Status } from '../../components/status-label';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <main>
        <Header>Companies</Header>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category={'Products'}
            company={'Costco'}
            status={Status.Pending}
            promotion={true}
            country={'USA'}
            joinedDate={'2021-01-01'}
          />
        </CompanyTable>
      </main>
    </>
  );
}
