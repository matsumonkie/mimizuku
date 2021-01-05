module Main exposing (..)

import Browser
import Html exposing (Html, button, div, text)
import Html.Attributes as Html
import Html.Events exposing (onClick)
import Html.Parser as Parser
import Html.Parser.Util as Parser
import Json.Decode as Decode


-- * main

main : Program Decode.Value Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


-- * model

type alias Model =
    { state : LineState
    , izunaLine : List (Html Msg)
    }

type LineState
    = Added
    | Deleted
    | Unmodified

-- * message


type Msg
    = NoOp


-- * init

decodeFlags : Decode.Value -> Model
decodeFlags json =
    case Decode.decodeValue flagsDecoder json of
        Ok model ->
            model

        Err e ->
            Debug.todo ("failed to decode flags: " ++ Decode.errorToString e)

flagsDecoder : Decode.Decoder Model
flagsDecoder =
    let
        mkModel : List (Html Msg) -> LineState -> Model
        mkModel izunaLine state =
            { izunaLine = izunaLine
            , state = state
            }

        lineStateDecoder : String -> Decode.Decoder LineState
        lineStateDecoder lineState =
            case lineState of
                "ADDED" ->  Decode.succeed Added
                "DELETED" -> Decode.succeed Deleted
                "UNMODIFIED" -> Decode.succeed Unmodified
                _ -> Decode.fail "cannot decode line state"

        lineDomDecoder : String -> Decode.Decoder (List (Html Msg))
        lineDomDecoder str =
            case Parser.run str |> Result.map Parser.toVirtualDom of
                Ok lineDom -> Decode.succeed lineDom
                Err _ -> Decode.fail "cannot decode line dom"

    in
    Decode.map2 mkModel
        (Decode.at [ "izunaLine" ] (Decode.string |> Decode.andThen lineDomDecoder))
        (Decode.at [ "state" ] (Decode.string |> Decode.andThen lineStateDecoder))


init : Decode.Value -> (Model, Cmd Msg)
init json  =
    decodeFlags json |> \model -> (model, Cmd.none)

-- * update


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            (model, Cmd.none)

-- * view

view : Model -> Html Msg
view model =
    let
        tdAttr =
            case model.state of
                Added ->
                    [ Html.class "blob-code", Html.class "blob-code-addition" ]

                Deleted ->
                    [ Html.class "blob-code", Html.class "blob-code-deletion" ]

                Unmodified ->
                    [ Html.class "blob-code", Html.class "blob-code-context" ]

        spanAttributes marker =
            [ Html.class "blob-code-inner"
            , Html.class "blob-code-marker"
            , Html.attribute "data-code-marker" marker
            ]

        tdBody =
            case model.state of
                Added ->
                    Html.span (spanAttributes "+") model.izunaLine

                Deleted ->
                    Html.span (spanAttributes "-") model.izunaLine

                Unmodified ->
                    Html.span (spanAttributes " ") model.izunaLine
    in
    Html.td tdAttr [ tdBody ]


-- * subscriptions


subscriptions : Model -> Sub Msg
subscriptions _ = Sub.none
