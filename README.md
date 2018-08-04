# fesc-redesign
Redesigning the FESC Website

Brian Han - Initial Work


We will be looking to redesign the FESC website in order to meet the following goals:
- improve the information architecture
- modernize the looks
- improve performance
- make the site more accessible for the disabled
- have the site be responsive to a variety of devices

Charts

Added  a couple charts on the "NavBar--> About US--> Energy Reports" page using Google Charts.

Chart 1 - Line Chart - https://developers.google.com/chart/interactive/docs/gallery/linechart

Options Used: title, curveType, legend, colors


Chart 2 - Scatter Chart - https://developers.google.com/chart/interactive/docs/gallery/scatterchart

Options Used: title, hAxis, vAxis, legend



Due to the types of values that were being plotted, only a handful of charts made sense to use.  With only "Year" and "BTUs" as plot points, line graphs, scatter graphs and bar graphs were the best options.  And with having 48 years to plot, the bar graph would've looked overcrowded so the remaining two options were used.   

In this case, it actually makes more sense to use just one line chart and with two sets of data series, or just two seperate line charts.  But for the sake of this project's parameters, scatter and line charts were used.

NOTE: Before making any changes to the charts,  
For the first graph, all the data arrays were re-aranged manually in reverse order (oldest year first) in order to have the graph plot the points correctly from left to right.  
On the second graph, I didn't want to manually adjust it again and so .reverse() was used on the main array in order to leave the data in it's orignal order but still have the graph present the data correctly.

TODO:  After assignment is complete, change the scatter graph back to a line graph.  Also change the graph options so that they are consistent between the two.
