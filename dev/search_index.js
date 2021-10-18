var documenterSearchIndex = {"docs":
[{"location":"functions/#Source-code","page":"Source code","title":"Source code","text":"","category":"section"},{"location":"functions/#Functions","page":"Source code","title":"Functions","text":"","category":"section"},{"location":"functions/","page":"Source code","title":"Source code","text":"Modules = [RatingCurves]\nPrivate = false\nOrder = [:function]","category":"page"},{"location":"functions/#Base.maximum-Tuple{Vector{Gauging}}","page":"Source code","title":"Base.maximum","text":"maximum(G::Vector{Gauging})\n\nReturn the gauging with the highest level.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Base.minimum-Tuple{Vector{Gauging}}","page":"Source code","title":"Base.minimum","text":"minimum(G::Vector{Gauging})\n\nReturn the gauging with the smallest level.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Base.sort-Tuple{Vector{Gauging}}","page":"Source code","title":"Base.sort","text":"sort(G::Vector{Gauging}; rev::Bool=false)\n\nSort the gauging according to the level.\n\nDetails\n\nSort in ascending order if rev=false (option by default) and in descending order if rev=true.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.cint-Tuple{CompoundRatingCurve}","page":"Source code","title":"RatingCurves.cint","text":"cint(crc::CompoundRatingCurve; nboot::Int=100, α::Real=.05)\n\nCompound rating curve parameter confidence intervals of level 1-α obtained by a bootstrap sample of size nboot.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.cint-Tuple{RatingCurve}","page":"Source code","title":"RatingCurves.cint","text":"cint(rc::RatingCurve; nboot::Int=1000, α::Real=.05)\n\nRating curve parameter confidence intervals of level 1-α obtained by a bootstrap sample of size nboot.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.crcfit-Tuple{AbstractVector{var\"#s3\"} where var\"#s3\"<:Real, AbstractVector{var\"#s2\"} where var\"#s2\"<:Real}","page":"Source code","title":"RatingCurves.crcfit","text":"crcfit(h::AbstractVector{<:Real}, q::AbstractVector{<:Real})\n\nFit the compound rating curve to the discharges q corresponding to the level h.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.crcfit-Tuple{Vector{Gauging}, Real}","page":"Source code","title":"RatingCurves.crcfit","text":"crcfit(G::Vector{Gauging},k::Real)\n\nFit the compound rating curve corresponding to the gaugings G using the break-point k.\n\nDetails\n\nAt least 3 gaugings are necessary by component of the compound rating curve.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.crcfit-Tuple{Vector{Gauging}}","page":"Source code","title":"RatingCurves.crcfit","text":"crcfit(G::Vector{Gauging})\n\nFit the compound rating curve corresponding to the gaugings G\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.discharge-Tuple{CompoundRatingCurve, Real}","page":"Source code","title":"RatingCurves.discharge","text":"discharge(crc::RatingCurve, h::Real)\n\nCompute the estimated discharge at level h with the compound rating curve crc.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.discharge-Tuple{Gauging}","page":"Source code","title":"RatingCurves.discharge","text":"discharge(G::Gauging)\n\nReturn the discharge of gauging G\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.discharge-Tuple{RatingCurve, Real}","page":"Source code","title":"RatingCurves.discharge","text":"discharge(rc::RatingCurve, h::Real)\n\nCompute the estimated discharge at level h with the rating curve rc.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.level-Tuple{CompoundRatingCurve, Real}","page":"Source code","title":"RatingCurves.level","text":"level(crc::RatingCurve, q::Real)\n\nCompute the level corresponding the the discharge q and the compound rating curve crc.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.level-Tuple{Gauging}","page":"Source code","title":"RatingCurves.level","text":"level(G::Gauging)\n\nReturn the level of gauging G\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.level-Tuple{RatingCurve, Real}","page":"Source code","title":"RatingCurves.level","text":"level(rc::RatingCurve, q::Real)\n\nEstimate the level corresponding to the discharge q with the rating curve rc.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.logdischarge-Tuple{CompoundRatingCurve, Real}","page":"Source code","title":"RatingCurves.logdischarge","text":"logdischarge(crc::RatingCurve, h::Real)\n\nCompute the estimated log discharge at level h with the compound rating curve crc.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.logdischarge-Tuple{RatingCurve, Real}","page":"Source code","title":"RatingCurves.logdischarge","text":"logdischarge(rc::RatingCurve, h::Real)\n\nCompute the log of the estimated discharge at level h with the rating curve rc.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.pint","page":"Source code","title":"RatingCurves.pint","text":"pint(rc::RatingCurve, level::Real, α::Real=0.05, rtol::Real=.05)\n\n1-α confidence interval of the estimated discharge at level h with the rating curve rc.\n\nSee also pintlog\n\nDetails\n\nEstimate the 1-α confidence interval of the estimated discharge corresponding to the rating curve rcat level h  with the relative error of the discharge measurement rtol.\n\nMeasurement error\n\nIt is assumed that (q_i pm operatornamertol times q_i) contains the true discharge 95% of the time. Assuming a Gaussian distribution for the  discharge measurement, the discharge Q_i distribution is given as follows:\n\nQ_i sim mathcalN left q_i  left(fracoperatornamertol q_i196right)^2 right\n\nThe discharge standard variation is therefore tau_i = fracoperatornamertol q_i196 \n\nResidual error\n\nThe estimation error σ² corresponding to the point on the rating curve is estimated with the sum of squared residuals in the log space.  Let qᵢ be the observed discharge and qᵢ be the corresponding discharge estimation. For the n3 gaugings, the  sum of squared residuals is defined as:\n\noperatornameSSE = sum_i=1^n ( log qᵢ - log qᵢ)^2\n\nThe variance estimation of the log residuals are therefore:\n\nσₑ² = frac1n-3 operatornameSSE\n\nThe linear regression prediction variance of the estimated discharge at level h₀ is given by:\n\nσ² = x₀^ (X^top X)^-1 x₀\n\nwhere x₀^ = 1 log (h₀ - b) and X is the structure matrix of the regression model.\n\nnote: Note\nThe uncertainty on b is neglected in this expression.\n\nLog discharge prediction error\n\nThe log prediction variance is assumed to be the sum of the estimation variance and the discharge measurement variance in the log space. It is then assumed that the prediction error in the log space is Gaussian in order to compute the confidence interval bounds.\n\nDischarge prediction error\n\nThe confidence interval bounds in the original space are given by the exponential of the bounds in the log space.\n\n\n\n\n\n","category":"function"},{"location":"functions/#RatingCurves.pint-2","page":"Source code","title":"RatingCurves.pint","text":"pint(crc::CompoundRatingCurve, level::Real, α::Real=0.05, rtol::Real=.05)\n\n1-α confidence interval of the estimated discharge at level h with the compound rating curve crc.\n\nDetails\n\nrtol represents the relative uncertainty of the dishcarge so that the true discharge is included in the interval q ± 1.96*rtol 95% of the time\n\n\n\n\n\n","category":"function"},{"location":"functions/#RatingCurves.pintlog","page":"Source code","title":"RatingCurves.pintlog","text":"pintlog(rc::RatingCurve, h₀::Real, α::Real=0.05, rtol::Real=.05)\n\n1-α confidence interval of the estimated log discharge at level h₀ with the rating curve rc.\n\nDetails\n\nrtol represents the relative uncertainty of the dishcarge so that the true discharge is included in the interval q ± 1.96*rtol 95% of the time\n\n\n\n\n\n","category":"function"},{"location":"functions/#RatingCurves.pintlog-2","page":"Source code","title":"RatingCurves.pintlog","text":"pintlog(crc::CompoundRatingCurve, level::Real, α::Real=0.05, rtol::Real=.05)\n\n1-α confidence interval of the estimated log discharge at level h with the compound rating curve crc.\n\nDetails\n\nrtol represents the relative uncertainty of the dishcarge so that the true discharge is included in the interval q ± 1.96*rtol 95% of the time\n\n\n\n\n\n","category":"function"},{"location":"functions/#RatingCurves.rcfit-Tuple{AbstractVector{var\"#s3\"} where var\"#s3\"<:Real, AbstractVector{var\"#s2\"} where var\"#s2\"<:Real}","page":"Source code","title":"RatingCurves.rcfit","text":"rcfit(h::AbstractVector{<:Real}, q::AbstractVector{<:Real})\n\nFit the rating curve to the discharges q corresponding to the level h.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.rcfit-Tuple{Vector{Gauging}, AbstractVector{var\"#s3\"} where var\"#s3\"<:Real}","page":"Source code","title":"RatingCurves.rcfit","text":"rcfit(G::Vector{Gauging}, constraint::AbstractVector{<:Real})\n\nFit the rating curve to the gaugings G passing through the point (h,q) specified in constraint.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.rcfit-Tuple{Vector{Gauging}, Real, AbstractVector{var\"#s2\"} where var\"#s2\"<:Real}","page":"Source code","title":"RatingCurves.rcfit","text":"rcfit(G::Vector{Gauging}, b::Real, constraint::AbstractVector{<:Real})\n\nFit the rating curve with parameter b to the gaugings G passing through the point (h,q) specified in constraint.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.rcfit-Tuple{Vector{Gauging}, Real}","page":"Source code","title":"RatingCurves.rcfit","text":"rcfit(G::Vector{Gauging}, b::Real)\n\nFit the rating curve of parameter b to the gaugings G.\n\n\n\n\n\n","category":"method"},{"location":"functions/#RatingCurves.rcfit-Tuple{Vector{Gauging}}","page":"Source code","title":"RatingCurves.rcfit","text":"rcfit(G::Vector{Gauging})\n\nFit the rating curve to the gaugings G.\n\n\n\n\n\n","category":"method"},{"location":"functions/#StatsBase.bic-Tuple{CompoundRatingCurve}","page":"Source code","title":"StatsBase.bic","text":"function bic(crc::CompoundRatingCurve)\n\nBIC of the compound rating curve model.\n\n\n\n\n\n","category":"method"},{"location":"functions/#StatsBase.bic-Tuple{RatingCurve}","page":"Source code","title":"StatsBase.bic","text":"function bic(rc::RatingCurve)\n\nBIC of the rating curve model.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Types","page":"Source code","title":"Types","text":"","category":"section"},{"location":"functions/","page":"Source code","title":"Source code","text":"Modules = [RatingCurves]\nPrivate = false\nOrder = [:type]","category":"page"},{"location":"functions/#RatingCurves.CompoundRatingCurve","page":"Source code","title":"RatingCurves.CompoundRatingCurve","text":"CompoundRatingCurve(threshold::Vector{<:Real},rc::Vector{RatingCurve})\n\nConstruct an object of type CompoundRatingCurve\n\n\n\n\n\n","category":"type"},{"location":"functions/#RatingCurves.Gauging","page":"Source code","title":"RatingCurves.Gauging","text":"Gauging(level::Real, discharge::Real)\n\nConstruct an object of type Gauging\n\n\n\n\n\n","category":"type"},{"location":"functions/#RatingCurves.RatingCurve","page":"Source code","title":"RatingCurves.RatingCurve","text":"RatingCurve(G::Vector{Gauging}, a::Real, b::Real, c::Real)\n\nConstruct an object of type RatingCurve\n\n\n\n\n\n","category":"type"},{"location":"tutorial/gauging/#Data","page":"Data","title":"Data","text":"","category":"section"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"using RatingCurves, DataFrames, Gadfly","category":"page"},{"location":"tutorial/gauging/#Load-the-data","page":"Data","title":"Load the data","text":"","category":"section"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"Loading the annual gaugings of the Sainte-Anne river:","category":"page"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"data = RatingCurves.dataset(\"50408\")\nfirst(data,5)","category":"page"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"The gaugings can be shown as by plotting the discharges as function of the levels:","category":"page"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"set_default_plot_size(12cm, 8cm)\nplot(data, x=:Level, y=:Discharge, Geom.point)","category":"page"},{"location":"tutorial/gauging/#Construct-the-Gauging-type","page":"Data","title":"Construct the Gauging type","text":"","category":"section"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"It is possible to construct a Gauging type with a level and discharge couple:","category":"page"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"h = data.Level[1]\nq = data.Discharge[1]\n\nG = Gauging(h,q)    ","category":"page"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"The level and the discharge of the gauging G can be retrieved with level and discharge methods respectively:","category":"page"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"h = level(G)\nq = discharge(G)","category":"page"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"The constructor can be broadcasted to obtain a vector of type Gauging:","category":"page"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"G = Gauging.(data.Level, data.Discharge)","category":"page"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"The level and discharge methods can also be broadcasted. For example:","category":"page"},{"location":"tutorial/gauging/","page":"Data","title":"Data","text":"discharge.(G)","category":"page"},{"location":"contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Contributions are welcomed. Here's the workflow for development of new features, refactoring and bugfix.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"master             # Stable branch, always ready to be tagged\ndev                # Development branch. New features, refactoring, bug and hotfix\n                   # are integrated into dev before going into master.\nfeature/           # New feature needs a `feature` prefix\n   <feature-name>     \nrefactor/          # Refactoring are tagged with a `refactor` prefix\n   <refactor-name>\nbug/               # Prefix for bugs found during development\n   <bug-fix>       \nhotfix/            # Prefix for hotfix (bugs for deployed versions)\n   <hot-fix>    ","category":"page"},{"location":"tutorial/crcfit/#Compound-rating-curve-fitting","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"","category":"section"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"The compound power-law level-discharge relationship for two segments is given as folows:","category":"page"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"q = begincases\na_1  (h-b_1)^c_1  text if   h  k \na_2  (h-b_2)^c_2  text if   h geq k\nendcases","category":"page"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"using RatingCurves, DataFrames, Gadfly\ndata = RatingCurves.dataset(\"50408\")\nh = data.Level\nq = data.Discharge\nG = Gauging.(h,q)    ","category":"page"},{"location":"tutorial/crcfit/#Algorithm","page":"Compound rating curve fitting","title":"Algorithm","text":"","category":"section"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"For a given k, the rating curve for large discharges is fitted to the gaugings whose level is greater than or equal to k. The parameters (a_2 b_2 c_2) are therefore estimated. For levels less than k, the rating curve is fitted to the gaugings whose level is less than k by imposing that curve passes through the point (k a_2(k-b_2)^c_2) to ensure continuity between the two segments. The search for the optimal k is performed with the limited-memory Broyden–Fletcher–Goldfarb–Shanno algorithm (L-BFGS).","category":"page"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"note: Note\nIn order to have enough observations for the estimation of the curve of each of the segments, the search for the optimal k is limited between the level of the third smallest gauging and the third largest gauging.","category":"page"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"See also rcfit.","category":"page"},{"location":"tutorial/crcfit/#Fit-on-gaugings","page":"Compound rating curve fitting","title":"Fit on gaugings","text":"","category":"section"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"The function crcfit can be called with the gauging levels and discharges:","category":"page"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"crc = crcfit(h,q)","category":"page"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"The function returns a CompoundRatingCurve type.","category":"page"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"note: Note\nThe function crcfit can also be called with the vector of Gauging as argument.","category":"page"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"The quality of the fit can be visually assessed in the log space:","category":"page"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"x = log.(data.Level)\ny = log.(data.Discharge)\n\nobs = layer(x=x, y=y, Geom.point)\nmodel = layer(x->logdischarge(crc, exp(x)), log(26), log(32), Theme(default_color=colorant\"red\"))\nplot(obs, model, Coord.cartesian(ymin=2, ymax=7))","category":"page"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"and in the original space:","category":"page"},{"location":"tutorial/crcfit/","page":"Compound rating curve fitting","title":"Compound rating curve fitting","text":"obs = layer(data, x=:Level, y=:Discharge, Geom.point)\nmodel = layer(h->discharge(crc, h), 26, 32, Theme(default_color=colorant\"red\"))\nplot(obs, model, Coord.cartesian(ymin=0, ymax=1000))","category":"page"},{"location":"tutorial/#Tutorial","page":"Getting started","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/","page":"Getting started","title":"Getting started","text":"This tutorial shows the functionalities of RatingCurves.jl. They are illustrated using the gaugings of the Sainte-Anne river in the province of Quebec (Canada).","category":"page"},{"location":"tutorial/","page":"Getting started","title":"Getting started","text":"Before executing this tutorial, make sure to have installed the following packages:","category":"page"},{"location":"tutorial/","page":"Getting started","title":"Getting started","text":"RatingCurves.jl (of course)\nDataFrames.jl (for using the DataFrame type)\nGadfly.jl (for plotting)","category":"page"},{"location":"tutorial/","page":"Getting started","title":"Getting started","text":"and import them using the following command:","category":"page"},{"location":"tutorial/","page":"Getting started","title":"Getting started","text":"using Dates, DataFrames, Gadfly, RatingCurves","category":"page"},{"location":"#Rating-curve-fitting-in-Julia","page":"Rating curve fitting in Julia","title":"Rating curve fitting in Julia","text":"","category":"section"},{"location":"","page":"Rating curve fitting in Julia","title":"Rating curve fitting in Julia","text":"RatingCurves.jl provides exhaustive high-performance functions for fitting power-law rating curves in Julia, such as:","category":"page"},{"location":"","page":"Rating curve fitting in Julia","title":"Rating curve fitting in Julia","text":"Fitting power-law rating curve to gaugings by minimizing the total sum of squares in the log space.\nFitting compound power-law rating curve to gaugings by minimizing the total sum of squares in the log space.\nComputing the parameter uncertainties.\nComputing the discharge prediction uncertainty.","category":"page"},{"location":"","page":"Rating curve fitting in Julia","title":"Rating curve fitting in Julia","text":"The power-law level-discharge relationship is given as folows:","category":"page"},{"location":"","page":"Rating curve fitting in Julia","title":"Rating curve fitting in Julia","text":"q = a  (h-b)^c","category":"page"},{"location":"","page":"Rating curve fitting in Julia","title":"Rating curve fitting in Julia","text":"The compound power-law level-discharge relationship for two segments is given as folows:","category":"page"},{"location":"","page":"Rating curve fitting in Julia","title":"Rating curve fitting in Julia","text":"q = begincases\na_1  (h-b_1)^c_1  text if   h  k \na_2  (h-b_2)^c_2  text if   h geq k\nendcases","category":"page"},{"location":"tutorial/rcfit/#Rating-curve-fitting","page":"Rating curve fitting","title":"Rating curve fitting","text":"","category":"section"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"using RatingCurves, DataFrames, Gadfly\ndata = RatingCurves.dataset(\"50408\")\nh = data.Level\nq = data.Discharge\nG = Gauging.(h,q)    ","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The following power-law relationship is used to model the level (h) and discharge (q) relationship:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"q = a  (h-b)^c","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"where a0, b in mathbbR and c0 are the parameters. The function rcfit finds the parameter estimates for a set of gaugings. ","category":"page"},{"location":"tutorial/rcfit/#Algorithm","page":"Rating curve fitting","title":"Algorithm","text":"","category":"section"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"In the log space, the level-discharge relationship can be written as follows:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"log q = log a + c log (h-b)","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"which is almost a simple linear regression model.","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"With a set of n geq 3 gaugings (h_iq_i) 1 leq i leq n, the optimal parameters (abc) are defined by the ones that minimize the sum of squares in the log space expressed as the following objective function:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"f_obj(abc) = sum_i=1^n left log q_i - log a - c log (h_i-b) right^2","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"Conditional on b, the parameters a and c that minimize the sum of squares are the estimated linear regression coefficients. The search for the optimal left( -infty  b  min(h_i) right) is performed with the limited-memory Broyden–Fletcher–Goldfarb–Shanno algorithm (L-BFGS). For each of the candidates for b, the optimal values of a and c are calculated explicitly with the normal equations in linear regression.","category":"page"},{"location":"tutorial/rcfit/#Fit-on-gaugings","page":"Rating curve fitting","title":"Fit on gaugings","text":"","category":"section"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The function rcfit can be called with the gauging levels and discharges:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"rc = rcfit(h,q)","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The function returns a RatingCurve type.","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"note: Note\nThe function rcfit can also be called with the vector of Gauging as argument.","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The quality of the fit can be visually assessed in the log space:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"x = log.(h .- rc.b)\ny = log.(q)\n\nplot(x=x, y=y, Geom.point, intercept=[log(rc.a)], slope=[rc.c], Geom.abline(color=\"red\", style=:dash))","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"and in the original space:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"obs = layer(data, x=:Level, y=:Discharge, Geom.point)\nmodel = layer(h->discharge(rc, h), 26, 32, Theme(default_color=colorant\"red\"))\nplot(obs, model)","category":"page"},{"location":"tutorial/rcfit/#Discharge-estimation","page":"Rating curve fitting","title":"Discharge estimation","text":"","category":"section"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"With the fitted rating curve, the discharge estimation at the level h_0 = 29 can be ontained with discharge:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"discharge(rc, 29)","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"It is also possible to estimate the level corresponding to the discharge q = 340 with level:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"level(rc, 340)","category":"page"},{"location":"tutorial/rcfit/#Parameter-uncertainty","page":"Rating curve fitting","title":"Parameter uncertainty","text":"","category":"section"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The rating curve parameter uncertainty can be estimated by bootstrap with the function cint. For the Sainte-Anne example, the 95% confidence intervals are estimated using 100 boostrap samples of the original gaugings:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"res = cint(rc, nboot=100)\nprintln(string(\"a ∈ [\", res[1,1],\" , \", res[2,1],\" ]\"))\nprintln(string(\"b ∈ [\", res[1,2],\" , \", res[2,2],\" ]\"))\nprintln(string(\"c ∈ [\", res[1,3],\" , \", res[2,3],\" ]\"))","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"note: Note\nIn the bootstrap resampling procedure, the gauging with the minimum level is always selected to ensure that the bootstrap rating curves are always defined on the original gauging level range.","category":"page"},{"location":"tutorial/rcfit/#Discharge-uncertainty","page":"Rating curve fitting","title":"Discharge uncertainty","text":"","category":"section"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The 95% confidence interval on the discharge estimation at h_0 = 29 can be obtained with pint:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"pint(rc, 29)","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"For more details on how this uncerainty is estimated, see the description of pint.","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The confidence interval for the whole level range of the rating curve can be plotted as follows:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"h₀ = range(minimum(data.Level), stop=32, length=100)\n\n# Discharge estimation for each level \nq̂₀ = discharge.(rc, h₀)\n\n# 95% confidence intervals of each discharge estimation\nres = pint.(rc, h₀)\n\n# Lower bound of interval\nqmin = getindex.(res,1)\n\n# Upper bound of interval\nqmax = getindex.(res,2)\n\n# Plotting the interval and the gaugings \nobs = layer(data, x=:Level, y=:Discharge, Geom.point)\nmodel = layer(x=h₀, y=q̂₀, Geom.line,\n    ymin = qmin, ymax = qmax, Geom.ribbon,\n    Theme(default_color=colorant\"red\"))\n\nplot(obs, model)","category":"page"},{"location":"tutorial/rcfit/#Fit-quality-assessment","page":"Rating curve fitting","title":"Fit quality assessment","text":"","category":"section"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The BIC (Bayesian Information Criterion) is an index of the quality of the curve fit to the gaugings. Assuming that the errors are normally distributed in the log space, the BIC of the curve in log space can be obtained as follows:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"operatornamebic = n log hatsigma_e^2 + 3 log n","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"where n corresponds to the number of gaugings, hatsigma_e^2 corresponds to the variance of the errors in the log space and the value 3 stands for the number of parameters.","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The BIC of a fitted rating curve can be obtaines with the function bic:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"bic(rc)","category":"page"},{"location":"tutorial/rcfit/#Constrained-rating-curve-fit","page":"Rating curve fitting","title":"Constrained rating curve fit","text":"","category":"section"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The rating curve can also be fit to the gaugings by requiring the curve to pass through a particular point. The curve obtained is the one that minimizes the sum of the squared errors among the curves that pass through the given point.","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"For example, if one wants the curve to pass through the last gauging, this constraint can be added by using rcfit with the contraint arguement:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"# Extract the level and discharge of the last gauging\nGₘ = maximum(G)\nh̃ = level(Gₘ)\nq̃ = discharge(Gₘ)\n\n# Fit the constrained curve\nconstrained_rc = rcfit(G, [h̃, q̃])","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The constrained curve can be plotted in the usual way:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"obs = layer(data, x=:Level, y=:Discharge, Geom.point)\nmodel = layer(h->discharge(constrained_rc, h), 26, 32, Theme(default_color=colorant\"red\"))\nplot(obs, model)","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"The confidence interval on the discharge estimations can also be obtained in the usual way:","category":"page"},{"location":"tutorial/rcfit/","page":"Rating curve fitting","title":"Rating curve fitting","text":"h₀ = range(minimum(data.Level), stop=32, length=100)\n\n# Discharge estimation for each level \nq̂₀ = discharge.(constrained_rc, h₀)\n\n# 95% confidence intervals of each discharge estimation\nres = pint.(constrained_rc, h₀)\n\n# Lower bound of interval\nqmin = getindex.(res,1)\n\n# Upper bound of interval\nqmax = getindex.(res,2)\n\n# Plotting the interval and the gaugings \nobs = layer(data, x=:Level, y=:Discharge, Geom.point)\nmodel = layer(x=h₀, y=q̂₀, Geom.line,\n    ymin = qmin, ymax = qmax, Geom.ribbon,\n    Theme(default_color=colorant\"red\"))\n\nplot(obs, model)","category":"page"}]
}
