import '../styles.scss';

const Capgemini = () => {
  return (    
    <div className="experience-tab-content">
      <h1 className="title">Capgemini</h1>
      <h2 className="subtitle">November 2015 - September 2020</h2>
      <p className="content">During this role I was tasked with building a React website which could track data ingests so the data warehouse team could understand when data had not been received or failed ingesting. This was a React website utilising a log system the data warehouse had when ingesting data. <br /> Performing data analysis on a data warehouse to enable analyst to perform tasks. Using SQL to create tables and views for analyst to query when performing tasks, these tables and views were then scheduled as part of a daily/weekly/monthly ingest system.</p>
    </div>
  );
}

export default Capgemini;
