
"""
    RatingCurve(G::Vector{Gauging}, a::Real, b::Real, c::Real)

Construct an object of type RatingCurve
"""
struct RatingCurve
    gauging::Vector{Gauging}
    a::Real
    b::Real
    c::Real
    RatingCurve(gauging::Vector{Gauging}, a::T,b::T,c::T) where {T<:Real} = new(gauging,a,b,c)
end

RatingCurve(gauging::Vector{Gauging}, a::Real, b::Real, c::Real) = RatingCurve(gauging, promote(a, b, c)...)
RatingCurve(gauging::Vector{Gauging}, a::Integer, b::Integer, c::Integer) = RatingCurve(gauging, float(a), float(b), float(c))
RatingCurve() = RatingCurve(Gauging[], 0.0, 0.0, 0.0)

Base.Broadcast.broadcastable(obj::RatingCurve) = Ref(obj)


"""
    discharge(rc::RatingCurve, h::Real)

Compute the estimated discharge at level `h` with the rating curve `rc`.
"""
function discharge(rc::RatingCurve, h::Real)
    
    y = logdischarge(rc, h)
    
    return exp(y)
    
end

"""
    logdischarge(rc::RatingCurve, h::Real)

Compute the log of the estimated discharge at level `h` with the rating curve `rc`.
"""
function logdischarge(rc::RatingCurve, h::Real)
    
    if (h>rc.b) & (rc.a>0) 
        y = log(rc.a) + rc.c*log(h-rc.b)
    else
        y = -Inf
    end
    
    return y
    
end



"""
    Base.show(io::IO, obj::EVA)
Override of the show function for the objects of type RatingCurve.
"""
function Base.show(io::IO, obj::RatingCurve)

    showRatingCurve(io, obj)

end

function showRatingCurve(io::IO, obj::RatingCurve, prefix::String = "")

    println(io, prefix, "RatingCurve")
    println(io, prefix ,"   ", "data: ", typeof(obj.gauging), "[", length(obj.gauging), "]")
    println(io, prefix, "   ", "Parameters:")
    println(io, prefix, "      ", "a = ", obj.a)
    println(io, prefix, "      ", "b = ", obj.b)
    println(io, prefix, "      ", "c = ", obj.c)

end